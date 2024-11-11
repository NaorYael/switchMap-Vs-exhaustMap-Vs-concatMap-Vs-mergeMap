import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  delay,
  from,
  of,
  mergeMap,
  switchMap,
  exhaustMap,
  concatMap,
} from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  template: ``,
})
export class App {
  constructor() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe({
          next: console.log,
          error: () => {},
          complete: () => console.log(`${operator.name} complete`),
        });
    };

    example(switchMap)();
  }
}

bootstrapApplication(App);
