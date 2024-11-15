import { Injectable } from '@angular/core';
import { EntityStore, QueryEntity, StoreConfig } from '@datorama/akita';
import { Observable } from 'rxjs';
import { EntityState } from '@datorama/akita';
import { TrackedHabit } from '../models/habit';

export interface TrackedHabitsState extends EntityState<TrackedHabit, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'trackedHabits' })
export class TrackedHabitsStore extends EntityStore<TrackedHabitsState> {
  constructor() {
    super();
  }
}

@Injectable({ providedIn: 'root' })
export class TrackedHabitsQuery extends QueryEntity<
  TrackedHabitsState,
  TrackedHabit
> {
  trackedHabits$: Observable<TrackedHabit[]>;

  constructor(protected override store: TrackedHabitsStore) {
    super(store);
    this.trackedHabits$ = this.selectAll();
  }
}
