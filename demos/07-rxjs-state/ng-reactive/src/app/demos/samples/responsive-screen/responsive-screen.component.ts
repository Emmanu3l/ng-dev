import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { OnInit, inject, Component } from '@angular/core';

@Component({
  selector: 'app-responsive-screen',
  templateUrl: './responsive-screen.component.html',
  styleUrls: ['./responsive-screen.component.scss']
})
export class ResponsiveScreenComponent implements OnInit {
  breakpointObserver = inject(BreakpointObserver);
  matches = false;

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        console.log(state.matches);
        if (state.matches) {
          this.matches = true;
        } else {
          this.matches = false;
        }
      })
  }

  getClass() {
    return this.matches ? 'smallClass' : 'largeClass';
  }
}
