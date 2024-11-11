import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      brand: 'Davidoff',
      flavors: ['dark roast', 'intense'],
      name: 'Davidoff brew',
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: number) {
    return this.coffees.find((coffee) => coffee.id === +id);
  }

  create(createCoffeeDto) {
    this.coffees.push(createCoffeeDto);
    return this.coffees;
  }
  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      console.log(updateCoffeeDto);
    }
  }
  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) this.coffees.splice(coffeeIndex, 1);
    console.log(coffeeIndex);
    return this.coffees;
  }
}
