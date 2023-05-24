import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person, wealthOptsValues } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  ps = inject(PersonService);
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  savePerson(personForm: NgForm): void {
    this.ps.save(personForm);
  }
}
