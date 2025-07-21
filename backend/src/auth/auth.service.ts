import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { ...user, sub: user.id };
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async register(signUpDto: SignUpDto) {
    const user = await this.usersService.create({
      username: signUpDto.username,
      password: signUpDto.password,
      name: signUpDto.name,
      balance: signUpDto.balance,
    } as CreateUserDto);
    const payload = { ...user, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
