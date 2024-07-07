import { Injectable } from '@nestjs/common';
import { ItemRepository } from './contact/data';
import { Item } from './contact/item';

@Injectable()
export class AppService {
  repository = new ItemRepository();
  delayInMS = 1000;
  async getItems(): Promise<Item[]> {
    // delay for delayInMS
    await new Promise((resolve) => setTimeout(resolve, this.delayInMS));
    return this.repository.getItems();
  }
  async addItem(item: Item): Promise<Item> {
    await new Promise((resolve) => setTimeout(resolve, this.delayInMS));
    return this.repository.addItem(item);
  }
  async getItem(id: number): Promise<Item> {
    // delay for delayInMS
    const items = await this.getItems();
    return items.find((item) => item.id === id);
  }
}
