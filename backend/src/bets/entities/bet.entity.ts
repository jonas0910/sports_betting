import { User } from '../../users/entities/user.entity';
import { Event } from '../../events/entities/event.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BetStatus } from '../enums/enums';
import { MatchResult } from 'src/events/enums/enums';

@Entity()
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: MatchResult,
  })
  winning_team: MatchResult;

  @Column()
  amount: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  @Column({
    type: 'enum',
    enum: BetStatus,
    default: BetStatus.PENDING, // Asumiendo que PENDING es el estado por defecto
  })
  status: BetStatus;

  @ManyToOne(() => Event, (event) => event.bets, { eager: true })
  @JoinColumn({ name: 'event_id' }) // 👈 Esto crea la FK
  event: Event;

  @ManyToOne(() => User, (user) => user.bets, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
