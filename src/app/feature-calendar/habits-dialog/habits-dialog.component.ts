import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { AppointmentDialogData } from '../../core/models/appointment';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habits-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TranslateModule,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './habits-dialog.component.html',
  styleUrl: './habits-dialog.component.scss',
})
export class HabitsDialogComponent {
  habitTrackingData: any[] = [
    { name: 'some name', done: false },
    { name: 'some other', done: true },
  ];

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppointmentDialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }
}
