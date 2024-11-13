import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private router: Router,
  ) {
    translate.addLangs(['de', 'en', 'fr', 'it']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/de|en|fr|it/) ? browserLang : 'en');

    // TODO: use state mgmt to access localstorage
    if (JSON.parse(localStorage.getItem('navigateToCalendar') ?? 'false')) {
      this.router.navigate(['/calendar']);
    }
    // TODO: use state mgmt to access localstorage
    localStorage.setItem('navigateToCalendar', 'true');
  }
}
