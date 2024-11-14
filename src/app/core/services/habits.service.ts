import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { HabitsDbService } from './habits-db.service';
import { HabitsStore } from '../state/habits.store';
import { HabitsQuery } from '../state/habits.query';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  habits$: Observable<Habit[]>;

  constructor(
    private habitsStore: HabitsStore,
    private habitsDbService: HabitsDbService,
    private habitsQuery: HabitsQuery,
  ) {
    this.habits$ = this.habitsQuery.habits$;
  }

  async createHabit(habit: Habit) {
    const id = await this.habitsDbService.createHabit(habit);
    this.habitsStore.add({ ...habit, id });
  }

  async loadHabits() {
    const habits = await this.habitsDbService.getHabits();
    this.habitsStore.set(habits);
  }

  async deleteHabit(id: number) {
    await this.habitsDbService.deleteHabit(id);
    this.habitsStore.remove(id);
  }
}
