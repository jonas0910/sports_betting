import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { Bet } from './entities/bet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Event } from 'src/events/entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bet, User, Event]), // Asegúrate de importar las entidades necesarias aquí
  ],
  controllers: [BetsController],
  providers: [BetsService],
})
export class BetsModule {}
