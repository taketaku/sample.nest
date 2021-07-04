import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll() {
    return 'all dogs';
  }
}
