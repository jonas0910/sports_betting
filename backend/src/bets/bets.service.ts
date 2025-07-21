import { Injectable } from '@nestjs/common';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bet } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Event } from 'src/events/entities/event.entity';

@Injectable()
export class BetsService {
  constructor(
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createBetDto: CreateBetDto, userId: number) {
    const { event_id, ...rest } = createBetDto;

    const event = await this.eventRepository.findOneByOrFail({ id: event_id });
    const user = await this.userRepository.findOneByOrFail({ id: userId });

    const bet = this.betRepository.create({
      ...rest,
      event,
      user,
    });

    return await this.betRepository.save(bet);
  }

  async findByUser(userId: number) {
    return this.betRepository.find({
      where: { user: { id: userId } },
      relations: ['event'], // si quieres incluir el evento
    });
  }

  // create(createBetDto: CreateBetDto) {
  //   const bet = this.betRepository.create(createBetDto);
  //   return this.betRepository.save(bet);
  // }

  findAll() {
    return this.betRepository.find();
  }

  findOne(id: number) {
    return this.betRepository.findOneBy({ id });
  }

  update(id: number, updateBetDto: UpdateBetDto) {
    return this.betRepository.update(id, updateBetDto);
  }

  remove(id: number) {
    return this.betRepository.delete(id);
  }
}
