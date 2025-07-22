import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Team } from '../teams/entities/team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, Team]), // Asegúrate de importar la entidad Event
  ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
