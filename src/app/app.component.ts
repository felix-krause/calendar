import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './core/services/app.service';
import { AppQuery } from './core/state/app.query';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private router: Router,
    private appService: AppService,
    private appQuery: AppQuery,
  ) {
    translate.addLangs(['de', 'en', 'fr', 'it']);
    const browserLang = translate.getBrowserLang();
    translate.setDefaultLang(
      browserLang?.match(/de|en|fr|it/) ? browserLang : 'en',
    );
    this.appQuery.language$.subscribe((lang) => {
      translate.use(lang);
    });
    this.appQuery.navigateToCalendar$
      .pipe(first())
      .subscribe((shouldNavigate) => {
        if (shouldNavigate) {
          this.router.navigate(['/calendar']);
        }
        this.appService.setNavigateToCalendar(true);
      });
  }
}
