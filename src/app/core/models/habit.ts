export interface NewHabitDialogData {
  title: string;
}

export interface Habit extends NewHabitDialogData {
  id?: number;
}
