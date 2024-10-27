import { Component, Input, OnInit, signal } from '@angular/core';
import { CalendarDay } from '../../core/models/calendar-day';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { filter, Observable, switchMap } from 'rxjs';
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

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatButtonModule, MatIconModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
})
export class DayComponent implements OnInit {
  private _calenderDay = signal<CalendarDay | undefined>(undefined);

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

  appointments$?: Observable<Appointment[]>;

  constructor(
    private appointmentService: AppointmentService,
    private appointmentQuery: AppointmentQuery,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.appointmentService.loadAppointments();
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

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id);
  }
}
