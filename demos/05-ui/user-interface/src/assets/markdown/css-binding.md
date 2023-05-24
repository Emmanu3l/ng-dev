- `ngClass`, `ngStyle`, css-attribute binding provide a way to dynamically change the style of an element

- demo-container.component.html uses `ngStyle` to dynamically change the margin of the workbench

  ```html
  <div class="gdSidenavContent" [ngStyle]="workbenchMargin | async">
  ```
