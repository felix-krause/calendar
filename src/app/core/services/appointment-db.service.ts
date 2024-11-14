import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDbService {
  constructor(private db: DatabaseService) {}

  async addAppointment(appointment: Appointment) {
    return await this.db.appointments.add(appointment);
  }

  async getAppointments() {
    return await this.db.appointments.toArray();
  }

  async deleteAppointment(id: number) {
    return await this.db.appointments.delete(id);
  }
}
