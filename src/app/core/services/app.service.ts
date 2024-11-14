import { Injectable } from '@angular/core';
import { AppStore } from '../state/app.store';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private appStore: AppStore) {
    this.loadInitialState();
  }

  private loadInitialState() {
    // SMELL: I don't like that we redefine the initial state here
    // SMELL: I don't like that we use localStorage here, there should be a service for that
    const language = localStorage.getItem('language') || 'en';
    const navigateToCalendar = JSON.parse(
      localStorage.getItem('navigateToCalendar') || 'false',
    );
    this.appStore.update({ language, navigateToCalendar });
  }

  setLanguage(language: string) {
    localStorage.setItem('language', language);
    this.appStore.update({ language });
  }

  setNavigateToCalendar(value: boolean) {
    localStorage.setItem('navigateToCalendar', JSON.stringify(value));
    this.appStore.update({ navigateToCalendar: value });
  }
}
