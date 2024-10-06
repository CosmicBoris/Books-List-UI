import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {BookService} from '../../../shared/services/book.service';
import {Book} from '../entities/book';
import {BookDetailsDialogComponent} from './book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
  public book: Book;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly bookSrv: BookService,
    private readonly dialog: MatDialog
  ) {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.book = this.bookSrv.getBook(Number(id));
  }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {book: this.book},
      width: '90%',
      maxWidth: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => this.onDialogClosed(result));
  }

  private onDialogClosed(result: Omit<Book, 'id'>): void {
    if (result) {
      this.bookSrv.updateBook({ ...result, id: this.book.id });
    }
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
