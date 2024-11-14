import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class HabitsDbService {
  constructor(private db: DatabaseService) {}

  async createHabit(habit: Habit) {
    return await this.db.habits.add(habit);
  }

  async getHabits() {
    return await this.db.habits.toArray();
  }

  async deleteHabit(id: number) {
    return await this.db.habits.delete(id);
  }
}
