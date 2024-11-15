import { Injectable } from '@angular/core';
import { Store, StoreConfig, Query } from '@datorama/akita';

interface AppState {
  language: string;
  navigateToCalendar: boolean;
}

const createInitialState: AppState = {
  language: 'en',
  navigateToCalendar: false,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState);
  }
}

@Injectable({ providedIn: 'root' })
class AppQuery extends Query<AppState> {
  language$;
  navigateToCalendar$;

  constructor(protected override store: AppStore) {
    super(store);
    this.language$ = this.select('language');
    this.navigateToCalendar$ = this.select('navigateToCalendar');
  }
}

export { AppStore, AppQuery };
export type { AppState };
