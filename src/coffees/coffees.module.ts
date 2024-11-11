import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeesService } from './coffees.service';

@Module({ controllers: [CoffeeController], providers: [CoffeesService] })
export class CoffeesModule {}
