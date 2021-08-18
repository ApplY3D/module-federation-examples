import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'platform' })
export class CounterService {
  count$ = new BehaviorSubject(0);

  constructor() {
    console.log('counter service created');
  }

  increment() {
    this.count$.next(this.count$.getValue() + 1);
  }

  decrement() {
    this.count$.next(this.count$.getValue() - 1);
  }
}
