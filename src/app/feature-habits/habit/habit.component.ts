import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Habit } from '../../core/models/habit';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../core/services/calendar.service';
import { TrackedHabitsService } from '../../core/services/tracked-habits.service';
import { CalendarDay } from '../../core/models/calendar-day';
import { map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.scss',
  host: { class: 'app-habit' },
  encapsulation: ViewEncapsulation.None,
})
export class HabitComponent {
  currentDate: Date = new Date();
  datesInMonth: CalendarDay[] = [];
  get trackedHabits$() {
    return this.trackedHabitsService
      .getTrackedHabitsByDatesAndId(
        this.datesInMonth.map((day) => day.isoString),
        this.habit!.id!,
      )
      .pipe(
        map((trackedHabits) =>
          this.datesInMonth.map((day) => {
            const trackedHabit = trackedHabits.find(
              (trackedHabit) => trackedHabit.date === day.isoString,
            );
            console.info(trackedHabit, {
              ...trackedHabit,
              date: day.isoString,
              future: day.future,
              past: day.past,
              today: day.today,
            });
            return {
              ...trackedHabit,
              date: day.isoString,
              future: day.future,
              past: day.past,
              today: day.today,
            };
          }),
        ),
      );
  }
  @Input() habit?: Habit;

  constructor(
    private calendarService: CalendarService,
    private trackedHabitsService: TrackedHabitsService,
  ) {
    this.datesInMonth = this.calendarService.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
  }

  prevMonth() {
    this.currentDate = this.calendarService.incrementMonth(
      this.currentDate,
      -1,
    );
    this.datesInMonth = this.calendarService.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
  }

  nextMonth() {
    this.currentDate = this.calendarService.incrementMonth(this.currentDate, 1);
    this.datesInMonth = this.calendarService.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
  }
}
