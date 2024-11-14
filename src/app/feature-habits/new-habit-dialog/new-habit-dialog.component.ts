import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { NewHabitDialogData } from '../../core/models/habit';

@Component({
  selector: 'app-new-habit-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './new-habit-dialog.component.html',
  styleUrl: './new-habit-dialog.component.scss',
})
export class NewHabitDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NewHabitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewHabitDialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }
}
