import { Injectable } from '@angular/core';
import { Habit, TrackedHabit } from '../models/habit';
import { Observable } from 'rxjs';
import {
  TrackedHabitsStore,
  TrackedHabitsQuery,
} from '../state/tracked-habits.state';
import { TrackedHabitsDbService } from './tracked-habits-db.service';
import { Order } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class TrackedHabitsService {
  trackedHabits$: Observable<TrackedHabit[]>;

  constructor(
    private trackedHabitsStore: TrackedHabitsStore,
    private trackedHabitsDbService: TrackedHabitsDbService,
    private trackedHabitsQuery: TrackedHabitsQuery,
  ) {
    this.trackedHabits$ = this.trackedHabitsQuery.trackedHabits$;
    this.load();
  }

  async addOrUpdate(habits: TrackedHabit[]) {
    const updatedHabits =
      await this.trackedHabitsDbService.createOrUpdateTrackedHabits(habits);
    this.trackedHabitsStore.set(updatedHabits);
  }

  async load() {
    const trackedHabits = await this.trackedHabitsDbService.getTrackedHabits();
    this.trackedHabitsStore.set(trackedHabits);
  }

  getTrackedHabitsByDate(date: string): Observable<TrackedHabit[]> {
    return this.trackedHabitsQuery.selectAll({
      filterBy: (entity) => entity.date === date,
    });
  }

  getTrackedHabitsByDates(dates: string[]): Observable<TrackedHabit[]> {
    return this.trackedHabitsQuery.selectAll({
      filterBy: (entity) => dates.some((date) => entity.date === date),
    });
  }

  getTrackedHabitsByDatesAndId(
    dates: string[],
    habitId: number,
  ): Observable<TrackedHabit[]> {
    console.info(habitId);
    return this.trackedHabitsQuery.selectAll({
      filterBy: (entity) =>
        entity.habitId === habitId &&
        dates.some((date) => entity.date === date),
      sortBy: 'date',
      sortByOrder: Order.ASC,
    });
  }
}
