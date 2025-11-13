import { Component, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    TranslateModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { class: 'header' },
})
export class HeaderComponent {
  i18nTitle = input<string>('');
}
