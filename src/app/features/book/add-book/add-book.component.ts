import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../shared/services/book.service';
import {MatDialog} from '@angular/material/dialog';
import {AddBookDialogComponent} from './add-book-dialog/add-book-dialog.component';
import {Book} from '../entities/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly bookSrv = inject(BookService);
  private readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    const dialogRef = this.dialog.open(AddBookDialogComponent);
    dialogRef.afterClosed().subscribe(result => this.onDialogClosed(result));
  }

  private onDialogClosed(result: Omit<Book, 'id'>): void {
    if (result) {
      this.bookSrv.addBook(result);
    }
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
