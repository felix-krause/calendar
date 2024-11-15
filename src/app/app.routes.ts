import { Routes } from '@angular/router';
import { CalenderComponent } from './feature-calendar/calender/calender.component';
import { MainComponent } from './feature-main/main/main.component';
import { HabitsComponent } from './feature-habits/habits/habits.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'calendar',
    component: CalenderComponent,
  },
  {
    path: 'habits',
    component: HabitsComponent,
  },
];
