import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  logoUrl: string;
}
