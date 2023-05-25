import { Component } from '@angular/core';
import axios from 'axios';
import { Observable, from, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './creating-observable.component.html',
  styleUrls: ['./creating-observable.component.scss'],
})
export class CreatingObservableComponent {
  onErr = (err: any) => console.log(err);
  onComplete = () => console.log('complete');

  useOf() {
    of([2, 5, 9, 12, 22]).subscribe((data) => console.log('of(): ', data));
  }

  useFrom() {
    const arr = [2, 5, 9, 12, 22];
    from(arr).subscribe((data: number) => console.log('from(): ', data));
  }

  useTapMap() {
    from([2, 5, 9, 12, 22]) // 5 marbles
      .pipe(
        tap((n) => console.log('before filter: ', n)),
        map((n) => n * 2),
        tap((n) => console.log('after filter: ', n)),
      )
      .subscribe((data: number) => console.log('final: ', data));
  }

  useOperator() {
    from([2, 5, 9, 12, 22]) // 5 marbles
      .pipe(
        filter((n) => n > 6),
        map((n) => n * 2)
      )
      .subscribe((data: number) => console.log('useOperator: ', data));
  }
  // Use the mock Promise
  usePromiseToObs() {
    const url = 'http://localhost:3000/skills';

    //classic promise pattern
    axios.get(url).then((data) => console.log('received data', data));

    // from casts a promise to an observable so that it can be subscribe
    from(axios.get(url)).subscribe(
      (data) => console.log('data from axios', data),
      (err) => console.log('err:', err),
      () => console.log('complete')
    );
  }


  useNewObs() {
    let skills = [
      {
        id: 1,
        name: 'Custom Theme',
        completed: true,
      },
      {
        id: 2,
        name: 'Theme Mixins',
        completed: false,
      },
    ];

    //Manually create skills obs where each skill is emitted one after the other with 500ms delay
    let skills$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(skills);
        observer.complete();
      }, 500);
    });

    //easies way to create an observable: let skills$ = of(skills)

    skills$.subscribe((data) => console.log('skill item: ', data));
  }

  // Wraps an function that uses callbacks (navigator.geolocation.getCurrentPosition) into an observable
  // navigator.geolocation.getCurrentPosition(success[, error[, [options]])
  getGeolocation$(): Observable<any> {
    return new Observable((observer) => {
      //original function
      navigator.geolocation.getCurrentPosition(
        (pos: any) => {
          //emite an element in the callback of the callback based function
          observer.next(pos);
          observer.complete();
        },
        (err: any) => {
          observer.error(err);
        }
      );
    });
  }

  // Use the wrapped Callback as observable stream
  wrappingCallbacks() {
    this.getGeolocation$().subscribe((loc) => {
      console.log('current Geolocation:', loc);
    });
  }
}
