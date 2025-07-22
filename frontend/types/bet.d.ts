import { Event } from "./event";


export interface PostBet {
  event_id: number;
  amount: number;
  winning_team: string; // 'team1' | 'team2' | 'draw'
}

export interface GetBet {
  id: number;
  winning_team: string;
  amount: number;
  date: string;
  status: string;
  
  event: Event
}
