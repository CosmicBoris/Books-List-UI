import {inject, Injectable} from '@angular/core';
import {BookStore} from '../book-store';
import {Book} from '../../features/book/entities/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly bookStore = inject(BookStore);

  public getBook(id: number): Book {
    // return this.bookStore.books().filter((book: Book) => book.id === id)[0];
    return this.bookStore.entityMap()[id];
  }

  public addBook(book: Omit<Book, 'id'>): void {
    (book as Book).id = this.generateId();
    this.bookStore.create(book as Book);
  }

  public updateBook(book: Book): void {
    this.bookStore.update(book);
  }

  public removeBook(bookId: Book['id']): void {
    this.bookStore.remove(bookId);
  }

  private generateId(): number {
    return new Date().valueOf();
  }
}
