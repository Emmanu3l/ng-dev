import { Component, inject } from '@angular/core';
import { FormBuilder, UntypedFormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  fb: FormBuilder = inject(FormBuilder);
  skillForm = this.fb.group({
    name: 'Giro',
    skillsGrp: this.fb.array([
      this.fb.group({ skillname: 'Hunting', years: 9 }),
    ]),
  });

  addSkill() {
    const skillsGrp = this.skillForm.controls['skillsGrp'] as UntypedFormArray;
    skillsGrp.push(
      this.fb.group({
        skillname: '',
        years: '',
      })
    );
  }

  saveForm() {
    console.log('saving ...', this.skillForm.value);
  }
}
