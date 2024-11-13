import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BigButtonComponent } from '../../shared/big-button/big-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BigButtonComponent,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.scss',
})
export class HabitsComponent {}
