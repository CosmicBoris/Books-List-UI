import {Routes} from '@angular/router';
import {BookListComponent} from './features/books/book-list/book-list.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
    children: [
      {
        path: 'add',
        pathMatch: 'full',
        loadComponent: () => import('./features/book/add-book/add-book.component').then(c => c.AddBookComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./features/book/book-details/book-details.component').then(c => c.BookDetailsComponent),
      },
    ]
  },
  {path: '', redirectTo: 'books', pathMatch: 'full'}
];
