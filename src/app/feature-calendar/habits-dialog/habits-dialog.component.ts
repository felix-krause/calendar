import {
  Component,
  inject,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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
import {
  TrackedHabitDialogData,
  Habit,
  TrackedHabit,
} from '../../core/models/habit';
import { HabitsService } from '../../core/services/habits.service';
import { filter, map, Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';

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
    RouterLink,
  ],
  templateUrl: './habits-dialog.component.html',
  styleUrl: './habits-dialog.component.scss',
  host: { class: 'app-habits-dialog' },
  encapsulation: ViewEncapsulation.None,
})
export class HabitsDialogComponent {
  private habitsService = inject(HabitsService);

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrackedHabit[],
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }

  getHabitName(habitId: number): Observable<string> {
    return this.habitsService.getHabitById(habitId).pipe(
      filter((habit) => !!habit),
      map((habit) => habit.title),
    );
  }
}
