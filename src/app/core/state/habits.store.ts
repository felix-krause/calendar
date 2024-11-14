import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { HabitsState } from './habits.state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'habits' })
export class HabitsStore extends EntityStore<HabitsState> {
  constructor() {
    super();
  }
}
