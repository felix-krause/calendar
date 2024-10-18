import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AppointmentStore } from './appointment.store';
import { AppointmentState } from './appointment.state';
import { Observable, map } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({ providedIn: 'root' })
export class AppointmentQuery extends QueryEntity<
  AppointmentState,
  Appointment
> {
  constructor(protected override store: AppointmentStore) {
    super(store);
  }

  selectAppointmentsByDate(date: string): Observable<Appointment[]> {
    return this.selectAll().pipe(
      map((appointments) =>
        appointments.filter((appointment) => appointment.date === date)
      )
    );
  }
}
