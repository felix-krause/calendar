import { Injectable } from '@angular/core';
import { CalendarDay } from '../models/calendar-day';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  generateMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const dates = [];
    while (date.getMonth() === month) {
      const day = new Date(date);
      const calenderDay: CalendarDay = {
        day: day.getDay(),
        date: day.getDate(),
        past: day < new Date(),
        future: day > new Date(),
        today: day.toDateString() === new Date().toDateString(),
        isoString: day.toISOString(),
      };
      dates.push(calenderDay);
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }

  incrementMonth(currentDate: Date, delta: number): Date {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + delta,
      currentDate.getDate(),
    );
  }
}
