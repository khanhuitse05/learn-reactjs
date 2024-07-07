import { Item } from './item';

// class management items
export class ItemRepository {
  items = [
    new Item({
      id: 1,
      first: 'Jimmy',
      last: 'To',
      twitter: 'j1mmyto9',
      notes: 'Second account',
      favorite: true,
    }),
    new Item({
      id: 2,
      first: 'Khanh',
      last: 'To',
      twitter: 'khanhuitse05',
      notes: 'Real account',
      favorite: true,
    }),
    new Item({
      id: 3,
      first: 'To',
      last: 'Chelsea',
      twitter: 'chelse@9',
      notes: 'True blue',
      favorite: true,
    }),
  ];
  getItems() {
    return this.items;
  }
  addItem(item: Item) {
    this.items.push(item);
    return item;
  }
}
