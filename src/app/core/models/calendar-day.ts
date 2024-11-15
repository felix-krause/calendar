export interface CalendarDay {
  day: number;
  date: number;
  today?: boolean;
  past?: boolean;
  future?: boolean;
  isoString: string;
}
