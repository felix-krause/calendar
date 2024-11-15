import { Injectable } from '@angular/core';
import { TrackedHabit } from '../models/habit';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class TrackedHabitsDbService {
  constructor(private db: DatabaseService) {}

  async createOrUpdateTrackedHabits(trackedHabits: TrackedHabit[]) {
    for (const habit of trackedHabits) {
      if (!habit.id) {
        habit.id = await this.db.trackedHabits.add(habit);
      } else {
        await this.db.trackedHabits.update(habit.id, habit);
      }
    }

    return await this.db.trackedHabits.toArray();
  }

  async getTrackedHabits() {
    return await this.db.trackedHabits.toArray();
  }
}
