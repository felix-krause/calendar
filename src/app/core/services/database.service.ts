import Dexie from 'dexie';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Habit } from '../models/habit';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  appointments: Dexie.Table<Appointment, number>;
  habits: Dexie.Table<Habit, number>;

  constructor() {
    super('AppointmentDatabase');

    // Version 1 - Initial schema
    this.version(1).stores({
      appointments: '++id, title, date, description',
    });

    // Version 2 - Added habits
    this.version(2).stores({
      appointments: '++id, title, date, description',
      habits: '++id, title',
    });

    // Future versions...
    // this.version(3)...

    this.appointments = this.table('appointments');
    this.habits = this.table('habits');
  }
}
