import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Asegúrate de importar la entidad User
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Exporta el servicio si es necesario en otros módulos
})
export class UsersModule {}
