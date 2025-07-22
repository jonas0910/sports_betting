import { Bet } from '../../bets/entities/bet.entity';
import { Team } from '../../teams/entities/team.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EventStatus, MatchResult } from '../enums/enums';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({
    type: 'enum',
    enum: MatchResult,
  })
  result: MatchResult;

  @Column({
    type: 'enum',
    enum: EventStatus,
  })
  status: EventStatus;

  @Column()
  place: string;

  @ManyToOne(() => Team, (team) => team.events1, { eager: true })
  @JoinColumn({ name: 'team1_id' }) // 👈 Esto crea la FK
  team1: Team;

  @ManyToOne(() => Team, (team) => team.events2, { eager: true })
  @JoinColumn({ name: 'team2_id' }) // 👈 Esto crea la FK
  team2: Team;

  @OneToMany(() => Bet, (bet) => bet.event)
  bets: Bet[];
}
