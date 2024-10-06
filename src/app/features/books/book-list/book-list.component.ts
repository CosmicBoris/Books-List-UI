import {Component, inject} from '@angular/core';
import {BookCardComponent} from '../book-card/book-card.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {BookStore} from '../../../shared/book-store';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent, RouterOutlet, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  readonly store = inject(BookStore);
}
