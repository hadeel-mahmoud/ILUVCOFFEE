import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee-dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const coffee = this.coffeesService.findOne(id);
    if (!coffee) {
      // throw new HttpException(
      //   `Coffee with id: ${id} is not found`,
      //   HttpStatus.NOT_FOUND,
      // ); or
      throw new NotFoundException(`Coffee with id: ${id} is not found`);
    }
    return coffee;
  }

  // @Get('flavors')
  // getFlavours(): string {
  //   return 'This aciton gets all coffee flavors';
  // }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
