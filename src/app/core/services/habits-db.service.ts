import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Habit } from '../models/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitsDbService extends Dexie {
  habits: Dexie.Table<Habit, number>;

  constructor() {
    super('AppointmentDatabase');
    this.version(1).stores({
      habits: '++id, title',
    });
    this.habits = this.table('habits');
  }

  async createHabit(habit: Habit) {
    return await this.habits.add(habit);
  }

  async getHabits() {
    return await this.habits.toArray();
  }

  async deleteHabit(id: number) {
    return await this.habits.delete(id);
  }
}
