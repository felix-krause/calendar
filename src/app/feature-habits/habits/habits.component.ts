import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BigButtonComponent } from '../../shared/big-button/big-button.component';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewHabitDialogComponent } from '../new-habit-dialog/new-habit-dialog.component';
import { filter, Observable } from 'rxjs';
import { Habit, NewHabitDialogData } from '../../core/models/habit';
import { HabitsService } from '../../core/services/habits.service';
import { HabitComponent } from '../habit/habit.component';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BigButtonComponent,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    HabitComponent,
  ],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.scss',
})
export class HabitsComponent {
  habits$: Observable<Habit[]>;

  constructor(
    private habitsService: HabitsService,
    private dialog: MatDialog,
  ) {
    this.habits$ = this.habitsService.habits$;
  }

  addNewHabit() {
    this.dialog
      .open(NewHabitDialogComponent, {
        panelClass: 'full-page-dialog',
        data: { title: '' },
      })
      .afterClosed()
      .pipe(filter((result) => !!result))
      .subscribe((result: NewHabitDialogData) => {
        const newHabit: Habit = {
          ...result,
        };
        this.habitsService.createHabit(newHabit);
      });
  }
}
