import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Appointment } from '../models/appointment';
import { AppointmentState } from './appointment.state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'appointment' })
export class AppointmentStore extends EntityStore<AppointmentState> {
  constructor() {
    super();
  }
}
