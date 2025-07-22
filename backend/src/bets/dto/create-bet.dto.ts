import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { MatchResult } from '../../events/enums/enums';
import { BetStatus } from '../enums/enums';

export class CreateBetDto {
  @IsEnum(MatchResult)
  winning_team: MatchResult;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsEnum(BetStatus)
  status: BetStatus;

  @IsNumber()
  event_id: number;
}
