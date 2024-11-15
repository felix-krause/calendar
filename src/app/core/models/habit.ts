export interface NewHabitDialogData {
  title: string;
}

export interface Habit extends NewHabitDialogData {
  id?: number;
}

export interface TrackedHabitDialogData {
  habitId: number;
  done: boolean;
}

export interface TrackedHabit extends TrackedHabitDialogData {
  id?: number;
  date: string;
}
