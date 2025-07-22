// backend/seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { DataSource } from 'typeorm';
import { Team } from '../../teams/entities/team.entity';
import { Event } from '../../events/entities/event.entity';
import { MatchResult, EventStatus } from '../../events/enums/enums';
import { User } from '../../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  const teamRepo = dataSource.getRepository(Team);
  const eventRepo = dataSource.getRepository(Event);
  const userRepo = dataSource.getRepository(User);

  // Verificar si ya hay equipos para no repetir
  const existingTeams = await teamRepo.count();
  if (existingTeams > 0) {
    console.log('Seed ya ejecutado. Datos existentes detectados.');
    return process.exit(0);
  }

  // 1. Insertar equipos
  const teams = await teamRepo.save([
    { name: 'Lions FC', logoUrl: 'https://example.com/logos/lions.png' },
    { name: 'Tigers United', logoUrl: 'https://example.com/logos/tigers.png' },
    { name: 'Eagles Club', logoUrl: 'https://example.com/logos/eagles.png' },
    { name: 'Sharks FC', logoUrl: 'https://example.com/logos/sharks.png' },
    { name: 'Bulls Team', logoUrl: 'https://example.com/logos/bulls.png' },
    { name: 'Panthers SC', logoUrl: 'https://example.com/logos/panthers.png' },
    { name: 'Wolves FC', logoUrl: 'https://example.com/logos/wolves.png' },
    { name: 'Falcons Club', logoUrl: 'https://example.com/logos/falcons.png' },
    {
      name: 'Dragons United',
      logoUrl: 'https://example.com/logos/dragons.png',
    },
    { name: 'Knights FC', logoUrl: 'https://example.com/logos/knights.png' },
  ]);

  // 2. Insertar usuario demo
  const hashedPassword = await bcrypt.hash('password', 10);
  const user = await userRepo.save({
    name: 'Nombre',
    username: 'user',
    password: hashedPassword,
    balance: 500,
  });

  const eventsData = [
    {
      date: new Date('2025-08-10 18:00:00'),
      result: MatchResult.TEAM1,
      status: EventStatus.FINALIZADO,
      place: 'Estadio Nacional',
      team1: { id: teams[0].id },
      team2: { id: teams[1].id },
    },
    {
      date: new Date('2025-08-11 19:30:00'),
      result: MatchResult.DRAW,
      status: EventStatus.FINALIZADO,
      place: 'River Arena',
      team1: { id: teams[2].id },
      team2: { id: teams[3].id },
    },
    {
      date: new Date('2025-08-12 20:00:00'),
      result: MatchResult.TEAM2,
      status: EventStatus.FINALIZADO,
      place: 'Ciudad Deportiva',
      team1: { id: teams[4].id },
      team2: { id: teams[5].id },
    },
    {
      date: new Date('2025-08-13 17:45:00'),
      result: MatchResult.TEAM1,
      status: EventStatus.PROGRAMADO,
      place: 'Monte Alto',
      team1: { id: teams[6].id },
      team2: { id: teams[7].id },
    },
    {
      date: new Date('2025-08-14 16:00:00'),
      result: MatchResult.TEAM2,
      status: EventStatus.PROGRAMADO,
      place: 'Los Andes Arena',
      team1: { id: teams[8].id },
      team2: { id: teams[9].id },
    },
  ];

  await eventRepo.save(eventsData);

  console.log('✅ Seeding completado');
  process.exit(0);
}

bootstrap();
