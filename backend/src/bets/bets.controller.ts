/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { BetsService } from './bets.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';

@Controller('bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) {}

  @Get('me')
  findMyBets(@Req() req) {
    const userId: number = req.user.id; // eel ID del usuario autenticado
    return this.betsService.findByUser(userId);
  }

  @Post()
  create(@Body() createBetDto: CreateBetDto, @Req() req) {
    // verificar si llega
    console.log('Create Bet DTO:', createBetDto);
    const userId: number = req.user.id; // eel ID del usuario autenticado
    return this.betsService.create(createBetDto, userId);
  }

  @Get()
  findAll() {
    return this.betsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.betsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBetDto: UpdateBetDto) {
    return this.betsService.update(+id, updateBetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.betsService.remove(+id);
  }
}
