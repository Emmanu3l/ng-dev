import { Component } from '@angular/core';
@Component({
  selector: 'app-inline-css',
  templateUrl: './inline-css.component.html',
  styles: [
    `h1 {
      color:red
    };
    div {
      margin-top: 2rem; font-weight: bold
    };`
  ],
})
export class InlineCssComponent { }
