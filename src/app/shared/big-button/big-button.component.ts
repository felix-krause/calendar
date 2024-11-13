import { Component, ViewEncapsulation } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-big-button',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  host: { class: 'big-button' },
  hostDirectives: [
    {
      directive: MatRipple,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      @use '@angular/material' as mat;

      .big-button {
        align-items: center;
        justify-content: center;
        background-color: var(--primary);
        font-size: x-large;
        border-radius: 1rem;
        @include mat.elevation(2);
      }
    `,
  ],
})
export class BigButtonComponent extends MatCard {
  constructor() {
    super();
  }
}
