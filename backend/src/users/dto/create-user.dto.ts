/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  balance?: number;
}
