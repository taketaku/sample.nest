import {
  Body,
  ForbiddenException,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { Controller, Post, Get } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filter/http-exception.filtter';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // return this.catsService.findAll();
    return 'All cats';
  }
}
