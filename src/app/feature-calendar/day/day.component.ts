import { Component, Input, OnInit, signal } from '@angular/core';
import { CalendarDay } from '../../core/models/calendar-day';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {
  combineLatest,
  filter,
  first,
  map,
  Observable,
  switchMap,
  take,
} from 'rxjs';
import {
  Appointment,
  AppointmentDialogData,
} from '../../core/models/appointment';
import { AppointmentService } from '../../core/services/appointment.service';
import { AppointmentQuery } from '../../core/state/appointment.query';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { HabitsDialogComponent } from '../habits-dialog/habits-dialog.component';
import {
  Habit,
  TrackedHabit,
  TrackedHabitDialogData,
} from '../../core/models/habit';
import { HabitsService } from '../../core/services/habits.service';
import { TrackedHabitsService } from '../../core/services/tracked-habits.service';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
})
export class DayComponent implements OnInit {
  private _calenderDay = signal<CalendarDay | undefined>(undefined);
  appointments$?: Observable<Appointment[]>;

  @Input()
  set calenderDay(value: CalendarDay | undefined) {
    this._calenderDay.set(value);
    if (value) {
      this.appointments$ = this.appointmentQuery.selectAppointmentsByDate(
        value.isoString,
      );
    }
  }

  get calenderDay(): CalendarDay | undefined {
    return this._calenderDay();
  }

  constructor(
    private appointmentService: AppointmentService,
    private appointmentQuery: AppointmentQuery,
    private trackedHabitsService: TrackedHabitsService,
    private habitsService: HabitsService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    if (this.calenderDay) {
      this.appointments$ = this.appointmentQuery.selectAppointmentsByDate(
        this.calenderDay.isoString,
      );
    }
  }

  addAppointment() {
    this.dialog
      .open(AppointmentDialogComponent, {
        panelClass: 'full-page-dialog',
        data: { title: '', description: '' },
      })
      .afterClosed()
      .pipe(filter((result) => !!result))
      .subscribe((result: AppointmentDialogData) => {
        const newAppointment: Appointment = {
          ...result,
          date: this.calenderDay!.isoString,
        };
        this.appointmentService.addAppointment(newAppointment);
      });
  }

  addHabits() {
    combineLatest([
      this.trackedHabitsService.getTrackedHabitsByDate(
        this.calenderDay!.isoString,
      ),
      this.habitsService.habits$,
    ])
      .pipe(
        take(1),
        switchMap(([trackedHabits, habits]) => {
          const mergedHabits = this.mergeHabits(trackedHabits, habits);
          return this.dialog
            .open(HabitsDialogComponent, {
              panelClass: 'full-page-dialog',
              data: mergedHabits,
            })
            .afterClosed();
        }),
        filter((result) => !!result),
      )
      .subscribe((result: TrackedHabitDialogData[]) => {
        const trackedHabits = result.map((trackedHabit) => {
          return {
            ...trackedHabit,
            date: this.calenderDay!.isoString,
          };
        });
        this.trackedHabitsService.addOrUpdate(trackedHabits);
      });
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id);
  }

  private mergeHabits(
    trackedHabits: TrackedHabit[],
    habits: Habit[],
  ): TrackedHabit[] {
    return habits.map((habit) => {
      const trackedHabit = trackedHabits.find(
        (trackedHabit) => trackedHabit.habitId === habit.id,
      );
      return {
        habitId: habit.id!,
        done: trackedHabit?.done ?? false,
        id: trackedHabit?.id ?? undefined,
        date: this.calenderDay!.isoString,
      };
    });
  }
}
