import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.scss'],
})
export class InterfacesComponent {

  interfacesBasics() {
    interface IHumanBeeing {
      name: string;
      birthDate: Date;
    }

    class Knight implements IHumanBeeing {
      name: string;
      birthDate: Date;
      weapon = 'Battle Axe';
    }

    const rob: Knight = new Knight();
    rob.name = 'Rob Stark';

    const john: Knight = { name: 'John Snow', birthDate: new Date(), weapon: 'Schattenwolf' };

    interface ILongLat {
      Long: number;
      Lat: number;
    }
    const position: ILongLat = { Long: 17.123123, Lat: 12.123123 };
    console.log(
      'We are at position Long: ' + position.Long + ' Lat: ' + position.Lat
    );
  }

  interfacesNullability() {
    interface IWorker {
      name: string;
      salary: number;
    }

    // does not implement interface - salary missing
    // class Accountant implements IWorker {
    //    name: string;
    // }

    interface IManager {
      name: string;
      salary?: number;
    }

    class DeliveryManager implements IManager {
      name: string;
    }
  }

  interfacesFunctions() {
    interface LabelledValue {
      label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }

    const myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);

    // Function Interfaces

    type SearchFunc = (source: string, subString: string) => boolean;

    let searchDelegate: SearchFunc = function (
      source: string,
      subString: string
    ) {
      return false;
    };
    searchDelegate = (source: string, subString: string) => false;
  }
}
