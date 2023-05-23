import { Component } from '@angular/core';
import * as _ from 'lodash'; // Alias import

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent {

  basicClasses() {
    class Voucher {
      ID: number;
      Text: string;
      Amount: number;
      Date: Date;
      Total?: number;
    }

    class VoucherPropInit {
      ID: number = 0;
      Text: string = '';
      Amount: number = 0;
      Date: Date = new Date();
      Total?: number;
    }

    const v: Voucher = new Voucher(); // v: {}

    if (v.ID != null) {
      console.log(v.ID); // -> undefined err
    }
    v.ID = 0;
    v.Text = 'Demo Voucher';

    //Reason for strict prop init in tsconfig.json
    //Props are there - no {}
    const vi = new VoucherPropInit();

    const vouchers = new Array<Voucher>();

    const voucherA: Voucher = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Date: new Date(),
    };

    vouchers.push(voucherA);

    const voucherB: Voucher = {
      ID: 2,
      Text: 'Amazon',
      Amount: 44,
      Date: new Date(),
    };
    vouchers.push(voucherB);

    for (const voucher of vouchers) {
      console.log(voucher);
    }
  }

  classesConstructor() {
    class Person {
      name: string; // public by default
      private alive: boolean;

      get status(): string {
        return `"${this.name}" is alive:${this.alive}`;
      }

      get isAlive(): boolean {
        return this.alive;
      }

      constructor(name: string, alive: boolean) {
        this.name = name;
        this.alive = alive;
      }
    }

    const jim = new Person('Jim', true);
    console.log(jim.status);

    class Dog {
      //private or public creats prop implicitly
      constructor(private name: string, public breed: string) { }

      barkName() {
        return 'Wuff, my name is ' + this.name + ', I am a ' + this.breed;
      }
      sayName() {
        return 'Wuff, my name is ' + name; // Wuff, my name is
      }
    }

    const dog = new Dog('Soi', 'Whippet');
    console.log(dog.barkName());
    console.log(dog.sayName());
    console.log(dog.breed);

    class Invoice {
      constructor(public text: string, public paid = false) { }
    }

    const b1: Invoice = new Invoice('Car Purchase');
    const b2: Invoice = new Invoice('Rösti für Freundin', true);

    console.log('b1 with Text: ' + b1.text + ' was ' + b1.paid);
    console.log('b2 with Text: ' + b2.text + ' was ' + b2.paid);

    class Smurf {
      constructor(readonly name: string) {
        if (name.length < 1) {
          throw new Error('Empty name!');
        }
        this.name = name;
      }
    }

    const smurf = new Smurf('Daniel');
    // smurf.name = "Dan"; // Error! 'name' is read-only.
  }

  deepClone() {
    class Dog {
      constructor(public name: string, public breed: string) { }
    }

    class Person {
      constructor(public name: string, public dogs: Dog[]) { }
    }

    const alex = new Person('Alex', [
      { name: 'Soi', breed: 'Whippet' },
      { name: 'Giro', breed: 'Galgo Espanol' },
    ]);

    console.log(alex);

    const alexander = _.deepClone(alex);

    function passArgs(pers: Person) {
      pers.name = 'Gustav';
      pers.dogs[0].name = 'Soitscherl';
    }

    passArgs(alex);
    passArgs(alexander);

    console.log('alex:', alex);
    console.log('deep clone', alexander);
  }

  inheritance() {
    class Dog {
      constructor(public name: string) { } // public or private creates implicit prop
      public speed = 'with 40 km/h';

      move(meters: number): void {
        console.log(this.name + ' moved ' + meters + 'm. ' + this.speed);
      }
    }

    class Sighthound extends Dog {
      constructor(name: string) {
        super(name);
      } // super -> C# .base
      public speed = 'with up to 110 km/h';

      // method  override
      move(meters = 500): void {
        console.log('Running ...' + meters + 'm. ' + this.speed);
        // If you want to call implementation of base class use:
        super.move(meters);
      }
    }

    // var d = new Dog()

    const dog = new Dog('Bello');
    dog.move(50);

    const hound = new Sighthound('Soi');
    hound.move();
    hound.move(1000);

    // Protected Properties

    class Person {
      constructor(protected name: string) {
        this.name = name;
      }
    }

    class Employee extends Person {
      constructor(name: string, public department: string) {
        super(name); // base c#
      }

      public introduceSelf() {
        return `Hello, my name is ${this.name} and I work in ${this.department} department.`;
      }
    }

    const howard = new Employee('Howard', 'Sales');
    console.log(howard.introduceSelf());
    // console.log(howard.name); // error
  }

  staticProperties() {
    interface ICoordinate {
      x: number;
      y: number;
    }

    class Grid {
      constructor(public scale: number) { }

      static origin: ICoordinate = { x: 0, y: 0, z: 0 } as ICoordinate;

      calculateDistanceFromOrigin(point: { x: number; y: number }) {
        const xDist = point.x - Grid.origin.x;
        const yDist = point.y - Grid.origin.y;

        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
      }
    }

    const grid = new Grid(3);
    const p: ICoordinate = { x: 10, y: 20 };
    const result = grid.calculateDistanceFromOrigin(p);

    console.log('Grid result: ' + result);
  }

  casting() {
    class Voucher {
      ID: number;
      Text: string;
      Amount: number;
      Date?: Date;
    }

    interface IAccount {
      Number: number;
      Name: string;
      Balance: number;
    }

    // Assertion
    const v = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Date: new Date(),
    } as Voucher;

    // Casting
    const vs: Voucher = { ID: 1, Text: 'Media Markt', Amount: 22 } as Voucher;

    const a: IAccount = {
      Number: 400,
      Name: 'Kasse',
      Balance: 20,
      TimeBound: false,
    } as IAccount; // Needs cast because of TimeBound prop

    // Numbers
    const x = '32';
    const y = +x;

    // Date
    const dt: Date = new Date('2014-08-23T11:00:00Z');
    console.log(dt);

    // string
    const nbr = 22;
    const nbrSTring: string = String(nbr);
  }

  protected access() {
    console.log(
      'Props & Methods that are public or protected can be accessed from the template of the corresponding component.'
    );
  }
}
