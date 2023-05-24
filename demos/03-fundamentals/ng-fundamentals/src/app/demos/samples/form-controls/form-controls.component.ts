import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {
  subsSearchterms: Subscription | null = null;
  searchterm = new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]);

  ngOnInit() {
    this.subsSearchterms = this.searchterm.valueChanges
      .pipe(
        debounceTime(750) // wait 750ms after each keystroke
        //operator 2
        //operator 3
      )
      .subscribe((val) => {
        console.log('Currently your searching debounced for:', val);
      });
  }

  ngOnDestroy() {
    if (this.subsSearchterms) this.subsSearchterms.unsubscribe();
  }
}
