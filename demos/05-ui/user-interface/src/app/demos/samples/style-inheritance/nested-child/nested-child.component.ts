import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nested-child',
  template: ` <div class="divclass">Nested Child</div> `,
  styles: [
    `
      .divclass {
        border: black 4px solid;
      }
    `,
  ],
})
export class NestedChildComponent { }
