export interface NewHabitDialogData {
  title: string;
}

export interface Habit extends NewHabitDialogData {
  id?: number;
}

export interface DoneHabit {
  habitId: number;
  id?: number;
  date: string;
  done: boolean;
}

export interface HabitTrackingDialogData {
  habit: Habit;
  tracked: boolean;
}

export interface HabitTrackingData extends HabitTrackingDialogData {}
