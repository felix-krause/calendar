import Dexie from 'dexie';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Habit, TrackedHabit } from '../models/habit';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  appointments: Dexie.Table<Appointment, number>;
  habits: Dexie.Table<Habit, number>;
  trackedHabits: Dexie.Table<TrackedHabit, number>;

  constructor() {
    super('CalendarDatabase');

    this.version(1).stores({
      appointments: '++id, title, date, description',
    });

    this.version(2).stores({
      appointments: '++id, title, date, description',
      habits: '++id, title',
    });

    this.version(3).stores({
      appointments: '++id, title, date, description',
      habits: '++id, title',
      trackedHabits: '++id, habitId, done, date',
    });

    this.appointments = this.table('appointments');
    this.habits = this.table('habits');
    this.trackedHabits = this.table('trackedHabits');
  }
}
