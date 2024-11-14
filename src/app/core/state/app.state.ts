export interface AppState {
  language: string;
  navigateToCalendar: boolean;
}

export function createInitialAppState(): AppState {
  return {
    language: 'en',
    navigateToCalendar: false,
  };
}
