import { Component } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
})
export class FunctionsComponent {

  typedFunctions() {
    const addFunction = function (x: number, y: number): number {
      return x + y;
    };

    const result = addFunction(10, 20);
    console.log(result);
  }

  functionParameters() {
    // optional param
    function buildName(firstName: string, lastName?: string) {
      if (lastName) {
        return firstName + ' ' + lastName;
      } else {
        return firstName;
      }
    }

    console.log(buildName('Bob'));
    console.log(buildName('Giro', 'Galgohead'));

    // default param value
    function getAddress(street: string, city = 'Vienna') {
      return `${street}, ${city}`;
    }

    console.log(getAddress('Neuwaldegger Straße'));
    console.log(getAddress('Seestraße', 'Idolsberg'));

    // rest param
    function buildFruitBucket(fruitType: string, ...fruits: string[]): void {
      console.log(
        'The following ' + fruitType + ' are in the bucket ' + fruits.join(', ')
      );
    }

    // everything except Beeren goes to fruits array
    buildFruitBucket('Beeren', 'Himbeeren', 'Brombeeren', 'Goji Beeren');
  }

  returnValue() {
    function twoReturns(choice: boolean): string[] | null {
      // if ? then : else -> ternary operator
      return choice ? ['abc', 'cde'] : null;
    }

    console.log('result of function with two returns: ', twoReturns(false));
  }

  arrowFunctions() {
    const rectangleFunction = function (width: number, height: number) {
      return width * height;
    };

    // when using types you have to write brackets
    // method body & return can be omitted if single line statement
    const rectangleFunctionArrow = (width: number, height: number): number =>
      height * width;

    const result: number = rectangleFunctionArrow(10, 22);
    console.log(result);

    // not using types
    const doubleArrow = (height) => 2 * height;
    const doDouble = (nbr) => nbr * 2;
  }

  functionOverloads() {
    const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

    function pickCard(x: { suit: string; card: number }[]): number;
    function pickCard(x: number): { suit: string; card: number };
    function pickCard(x: any): any {
      if (typeof x == 'object') {
        const pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
      } else if (typeof x == 'number') {
        const pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
      } else {
        return null;
      }
    }

    const myDeck = [
      { suit: 'diamonds', card: 2 },
      { suit: 'spades', card: 10 },
      { suit: 'hearts', card: 4 },
    ];
    const pickedCard1 = myDeck[pickCard(myDeck)];
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

    const pickedCard2 = pickCard(15);
    console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
  }
}
