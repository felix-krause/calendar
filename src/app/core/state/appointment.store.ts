import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { AppointmentState } from './appointment.state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'appointment' })
export class AppointmentStore extends EntityStore<AppointmentState> {
  constructor() {
    super();
  }
}
