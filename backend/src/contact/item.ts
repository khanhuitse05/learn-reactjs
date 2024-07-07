export class Item {
  id: number;
  first: string;
  last: string;
  twitter: string;
  notes: string;
  favorite: boolean;

  // constructor
  constructor({
    id,
    first,
    last,
    twitter,
    notes,
    favorite,
  }: {
    id: number;
    first: string;
    last: string;
    twitter: string;
    notes: string;
    favorite: boolean;
  }) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.twitter = twitter;
    this.notes = notes;
    this.favorite = favorite;
  }
}
