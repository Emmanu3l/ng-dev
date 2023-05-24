import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.scss'],
})
export class TemplateValidationComponent implements OnInit {
  @ViewChild('personForm') form: NgForm | null = null;
  ps = inject(PersonService);
  person: Person = new Person();

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  patchValue() {
    this.form?.controls['name'].setValue('Heinrich');
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
