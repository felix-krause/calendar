import { Component, HostBinding, Input, OnInit, signal } from '@angular/core';
import { CalendarDay } from '../../core/models/calendar-day';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {
  combineLatest,
  filter,
  first,
  map,
  Observable,
  switchMap,
  take,
  tap,
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
import { BlockComponent } from '../block/block.component';
import { BlockType, TrackedBlock } from '../../core/models/block';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BlocksDialogComponent } from '../blocks-dialog/blocks-dialog.component';
import { TrackedBlocksService } from '../../core/services/tracked-blocks.service';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BlockComponent,
    MatTooltipModule,
  ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
})
export class DayComponent implements OnInit {
  private _calenderDay = signal<CalendarDay | undefined>(undefined);
  appointments$?: Observable<Appointment[]>;
  trackedHabits$?: Observable<TrackedHabit[]>;
  habitsTooltip: string = '';
  trackedBlock$?: Observable<TrackedBlock>;
  blockTooltips: string[] = [];

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
    private trackedBlocksService: TrackedBlocksService,
    private habitsService: HabitsService,
    private dialog: MatDialog,
    public translateService: TranslateService,
  ) {}

  ngOnInit() {
    if (this.calenderDay) {
      this.appointments$ = this.appointmentQuery.selectAppointmentsByDate(
        this.calenderDay.isoString,
      );
      this.trackedHabits$ = this.trackedHabitsService
        .getTrackedHabitsByDate(this.calenderDay!.isoString)
        .pipe(
          tap((habits) => {
            this.habitsTooltip =
              habits.length + this.translateService.instant('HABITS.DONE');
          }),
        );
      this.trackedBlock$ = this.trackedBlocksService
        .getTrackedBlockByDate(this.calenderDay!.isoString)
        .pipe(
          tap((block) => {
            this.blockTooltips = block?.schedule.map((s) =>
              this.translateService.instant('BLOCKS.' + s),
            );
          }),
        );
    }
  }

  editBlocks() {
    this.trackedBlocksService
      .getTrackedBlockByDate(this.calenderDay!.isoString)
      .pipe(
        take(1),
        switchMap((data) => {
          data = data ?? {
            schedule: [],
            date: this.calenderDay!.isoString,
          };

          return this.dialog
            .open(BlocksDialogComponent, {
              panelClass: 'full-page-dialog',
              data,
            })
            .afterClosed();
        }),
        filter((result) => !!result),
        switchMap((result: TrackedBlock) => {
          // TODO
          console.info('trackedBlock', result);
          return this.trackedBlocksService.addOrUpdate(result);
        }),
      )
      .subscribe();
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
