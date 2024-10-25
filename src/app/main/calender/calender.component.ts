import { CommonModule, DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarDay } from '../../core/models/calendar-day';
import { DayComponent } from '../day/day.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    CommonModule,
    TranslateModule,
    MatIconModule,
    DayComponent,
  ],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
})
export class CalenderComponent implements AfterViewInit {
  currentDate: Date = new Date();
  datesInMonth: CalendarDay[] = [];

  constructor() {
    this.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );
  }
  ngAfterViewInit(): void {
    this.scrollToToday();
  }

  generateMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const dates = [];
    while (date.getMonth() === month) {
      const day = new Date(date);
      const calenderDay: CalendarDay = {
        day: day.getDay(),
        date: day.getDate(),
        today: day.toDateString() === new Date().toDateString(),
        isoString: day.toISOString(),
      };
      dates.push(calenderDay);
      date.setDate(date.getDate() + 1);
    }
    this.datesInMonth = dates;
  }

  prevMonth() {
    this.incrementMonth(-1);
    this.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );
    this.scrollToToday();
  }

  nextMonth() {
    this.incrementMonth(1);
    this.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );
    this.scrollToToday();
  }

  private incrementMonth(delta: number): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + delta,
      this.currentDate.getDate()
    );
  }

  private scrollToToday() {
    setTimeout(() => {
      const first = document.querySelector('.first');
      if (first) {
        first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const today = document.querySelector('.today');
      if (today) {
        today.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
}
