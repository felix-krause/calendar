import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDbService extends Dexie {
  appointments: Dexie.Table<Appointment, number>;

  constructor() {
    super('AppointmentDatabase');
    this.version(1).stores({
      appointments: '++id, title, date, description',
    });
    this.appointments = this.table('appointments');
  }

  async addAppointment(appointment: Appointment) {
    return await this.appointments.add(appointment);
  }

  async getAppointments() {
    return await this.appointments.toArray();
  }

  async deleteAppointment(id: number) {
    return await this.appointments.delete(id);
  }
}
