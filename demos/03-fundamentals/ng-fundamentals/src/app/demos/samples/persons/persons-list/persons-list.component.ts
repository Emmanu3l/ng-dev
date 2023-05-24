import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent {
  @Input() persons: Person[] = [];
  @Output() personSelected = new EventEmitter<Person>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['persons']) {
      console.log('receiving new persons:', changes['persons'].currentValue);
    }
  }

  selectPerson(p: Person) {
    this.personSelected.emit(p);
  }
}
