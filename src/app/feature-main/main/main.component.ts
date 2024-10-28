import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, MatCardModule, TranslateModule, MatRippleModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
