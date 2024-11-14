import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppState } from './app.state';
import { AppStore } from './app.store';

@Injectable({ providedIn: 'root' })
export class AppQuery extends Query<AppState> {
  language$;
  navigateToCalendar$;

  constructor(protected override store: AppStore) {
    super(store);
    this.language$ = this.select('language');
    this.navigateToCalendar$ = this.select('navigateToCalendar');
  }
}
