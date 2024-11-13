import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatRippleModule } from '@angular/material/core';
import { BigButtonComponent } from '../../shared/big-button/big-button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, BigButtonComponent, TranslateModule, MatRippleModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
