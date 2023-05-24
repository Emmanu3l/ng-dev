import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.scss'],
})
export class AttrBindingComponent {
  isDisabled = true;
  isHidden = false;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
