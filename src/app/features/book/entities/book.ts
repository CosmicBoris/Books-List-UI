export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public year: string,
    public description: string,
    public coverArtUrl: string,
  ) {}
}
