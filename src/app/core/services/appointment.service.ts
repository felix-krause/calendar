import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentStore } from '../state/appointment.store';
import { AppointmentDbService } from './appointment-db.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(
    private appointmentStore: AppointmentStore,
    private appointmentDbService: AppointmentDbService
  ) {}

  async addAppointment(appointment: Appointment) {
    const id = await this.appointmentDbService.addAppointment(appointment);
    this.appointmentStore.add({ ...appointment, id });
  }

  async loadAppointments() {
    const appointments = await this.appointmentDbService.getAppointments();
    this.appointmentStore.set(appointments);
  }

  async deleteAppointment(id: number) {
    await this.appointmentDbService.deleteAppointment(id);
    this.appointmentStore.remove(id);
  }
}
