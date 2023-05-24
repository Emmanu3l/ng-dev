import { Component, OnInit, inject } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-ng-model-grp',
  templateUrl: './ng-model-grp.component.html',
  styleUrls: ['./ng-model-grp.component.scss'],
})
export class NgModelGrpComponent implements OnInit {
  ps = inject(PersonService);
  person: Person = new Person();
  wealthOpts = ['poor', 'rich', 'middle_class'];

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
