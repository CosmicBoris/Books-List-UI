import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput, MatLabel} from '@angular/material/input';
import {map} from 'rxjs';
import {Book} from '../entities/book';

@Component({
  selector: 'app-edit-book-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './edit-book-form.component.html',
  styleUrl: './edit-book-form.component.scss'
})
export class EditBookFormComponent implements OnInit {
  @Input() book!: Book;
  @Output() valid = new EventEmitter<boolean>(false);

  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(this.book?.title ?? '', Validators.required),
      author: new FormControl(this.book?.author ?? '', Validators.required),
      year: new FormControl(this.book?.year ?? '', Validators.required),
      description: new FormControl(this.book?.description ?? '', Validators.required),
      coverArtUrl: new FormControl(this.book?.coverArtUrl ?? '', [Validators.required, Validators.pattern('')])
    });

    this.formGroup.statusChanges.pipe(
      map(() => this.formGroup.valid)
    ).subscribe((value) => this.valid.emit(value));
  }

  get formSnapshot(): Omit<Book, 'id'> {
    return {
      title: (this.formGroup.controls['title'] as FormControl).value,
      author: (this.formGroup.controls['author'] as FormControl).value,
      year: (this.formGroup.controls['year'] as FormControl).value,
      description: (this.formGroup.controls['description'] as FormControl).value,
      coverArtUrl: (this.formGroup.controls['coverArtUrl'] as FormControl).value,
    }
  }
}
