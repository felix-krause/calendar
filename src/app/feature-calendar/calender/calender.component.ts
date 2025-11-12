import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarDay } from '../../core/models/calendar-day';
import { DayComponent } from '../day/day.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CalendarService } from '../../core/services/calendar.service';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    RouterModule,
    MatTooltipModule,
  ],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
})
export class CalenderComponent implements AfterViewInit {
  currentDate: Date = new Date();
  datesInMonth: CalendarDay[] = [];

  constructor(private calendarService: CalendarService) {
    this.datesInMonth = this.calendarService.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
  }
  ngAfterViewInit(): void {
    this.scrollToToday();
  }

  prevMonth() {
    this.currentDate = this.calendarService.incrementMonth(
      this.currentDate,
      -1,
    );
    this.datesInMonth = this.calendarService.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
    this.scrollToToday();
  }

  nextMonth() {
    this.currentDate = this.calendarService.incrementMonth(this.currentDate, 1);
    this.datesInMonth = this.calendarService.generateMonth(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
    );
    this.scrollToToday();
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
