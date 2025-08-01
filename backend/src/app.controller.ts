import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    const bcrypt = require('bcrypt');
    bcrypt.hash('password', 10).then(console.log);
    return this.appService.getHello();
  }
}
