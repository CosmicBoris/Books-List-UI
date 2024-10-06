import {Component, inject, ViewChild} from '@angular/core';
import {EditBookFormComponent} from "../../edit-book-form/edit-book-form.component";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent, MatDialogRef,
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-add-book-dialog',
  standalone: true,
  imports: [
    EditBookFormComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './add-book-dialog.component.html',
  styleUrl: './add-book-dialog.component.scss'
})
export class AddBookDialogComponent {
  @ViewChild(EditBookFormComponent) readonly editBookFormComponent!: EditBookFormComponent;
  readonly dialogRef: MatDialogRef<AddBookDialogComponent> = inject(MatDialogRef<AddBookDialogComponent>);
  formValid = false;

  closeDialogPassingData(): void {
    this.dialogRef.close(this.editBookFormComponent.formSnapshot);
  }
}
