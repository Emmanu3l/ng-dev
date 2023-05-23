import { Component } from '@angular/core'; // ES 6 module import
import * as moment from 'moment'; // Non ES6 Moduel import
import { Voucher } from '../model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent {

  basicVariables() {
    const myname = 'alex';

    // Numbers
    const age: number = 50;

    const weight = 83.12;
    // weight = 11; //re-assignment to const

    let dogWeight = 25.4;
    // dogWeight = "heavy"; //string assignment to number
    const rand = Math.random();

    const numbers: number[] = [];
    const myNumArray: Array<number> = new Array<number>();

    numbers[0] = 1;
    // numbers.push("two"); // compile-time error

    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false; // okay, definitely a boolean

    const isCustomer = false;
    const finished = false;

    // strings
    const dogName = 'Giro';
    const otherDogName = 'Soi';
    const myString = 'ten';

    const strings: Array<string> = ['hubert', 'Sam'];
    strings.push('Hans');
    // strings[1] = 1337; // compile time error
  }

  useLetConst() {
    const index = 0;
    const array = ['a', 'b', 'c'];

    //antipattern
    for (let index = 0; index < array.length; index++) {
      console.log('index:' + index);
      console.log('item:' + array[index]);
    }

    //use this if you dont need the index for something else
    for (let item of array) {
      console.log(item);
    }

    const person = { name: 'john', age: 22 };
    person.name = 'franz';
  }

  useVoid() {
    function handleClick(): void {
      const g = "I don't return anything.";
      console.log(g);
      // return g;
    }

    handleClick();
  }

  useEnums() {
    enum Happyness {
      happy = 2,
      unhappy = 4,
      ok = 6,
    }

    const isHappy: Happyness = Happyness.happy;

    enum Sex {
      male = 'm',
      female = 'f',
      divers = 'd',
    }

    enum VoucherStatus {
      draft,
      complete,
      pending,
    }

    function handleVoucher(v: Voucher, status: VoucherStatus) {
      switch (status) {
        case VoucherStatus.complete:
          console.log(`got voucher ${v}: will pay`);
          break;
        case VoucherStatus.draft:
          console.log(`got voucher ${v}: will save to O365`);
          break;
        case VoucherStatus.pending:
          console.log(`got voucher ${v}: will call the accountant`);
          break;
        default:
          console.log('...');
          break;
      }
    }

    const v: Voucher = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Date: new Date(),
    } as Voucher;

    handleVoucher(v, VoucherStatus.draft);
  }

  literalTypes() {
    type choice = 'ok' | 'not bad';

    function processChoice(ch: choice) {
      if (ch == 'ok') {
        console.log(`well ... you choose ${ch}`);
      }
    }

    processChoice('ok');
  }

  useTypings() {
    // typing from moment.js - import * as moment from 'moment';
    const dt = new Date(1990, 3, 2);
    console.log('Using time format: ', moment(dt).format('LTS'));
  }
}
