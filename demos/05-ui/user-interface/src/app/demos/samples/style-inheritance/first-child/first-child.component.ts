import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `
    <div class="divclass">First Child</div>
    <h3>I am h3 in first child</h3>
    <div>
      <app-nested-child></app-nested-child>
    </div>
  `,
  styles: [
    `.divclass {
        border: blue 4px solid;
      };
      h3 {
        margin: 2rem;
      };
    `
  ],
  // encapsulation: ViewEncapsulation.None
})
export class FirstChildComponent { }
