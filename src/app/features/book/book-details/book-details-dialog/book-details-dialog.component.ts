import {Component, inject, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent, MatDialogRef
} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {Book} from '../../entities/book';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatTooltip} from '@angular/material/tooltip';
import {BookService} from '../../../../shared/services/book.service';
import {EditBookFormComponent} from '../../edit-book-form/edit-book-form.component';

@Component({
  selector: 'app-book-details-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    MatButton,
    MatInput,
    MatIconButton,
    MatIcon,
    MatSlideToggle,
    MatTooltip,
    EditBookFormComponent
  ],
  templateUrl: './book-details-dialog.component.html',
  styleUrl: './book-details-dialog.component.scss'
})
export class BookDetailsDialogComponent {
  @ViewChild(EditBookFormComponent, {static: false}) readonly editBookFormComponent!: EditBookFormComponent;

  readonly data = inject<{book: Book}>(MAT_DIALOG_DATA);
  readonly dialogRef: MatDialogRef<BookDetailsDialogComponent> = inject(MatDialogRef<BookDetailsDialogComponent>);
  formValid = false;

  private readonly bookService = inject(BookService);

  closeDialogPassingData(): void {
    this.dialogRef.close(this.editBookFormComponent.formSnapshot);
  }

  deleteBook(): void {
    this.bookService.removeBook(this.data.book.id);
  }
}
