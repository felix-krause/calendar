import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HabitsState } from './habits.state';
import { Habit } from '../models/habit';
import { HabitsStore } from './habits.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HabitsQuery extends QueryEntity<HabitsState, Habit> {
  habits$: Observable<Habit[]>;

  constructor(protected override store: HabitsStore) {
    super(store);
    this.habits$ = this.selectAll();
  }
}
