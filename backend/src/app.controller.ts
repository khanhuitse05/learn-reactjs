import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './contact/item';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.appService.getItems();
  }
  @Get(':id')
  getItem(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return this.appService.getItem(id);
  }

  @Post()
  addItem(item: Item): Promise<Item> {
    return this.appService.addItem(item);
  }
}
