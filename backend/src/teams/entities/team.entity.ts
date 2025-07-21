import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../../events/entities/event.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logoUrl: string;

  @OneToMany(() => Event, (event) => event.team1)
  events1: Event[];

  @OneToMany(() => Event, (event) => event.team2)
  events2: Event[];
}
