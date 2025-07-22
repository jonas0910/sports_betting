import { Bet } from '../../bets/entities/bet.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 100 })
  balance: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // event.entity.ts
  @OneToMany(() => Bet, (bet) => bet.user)
  bets: Bet[];
}
