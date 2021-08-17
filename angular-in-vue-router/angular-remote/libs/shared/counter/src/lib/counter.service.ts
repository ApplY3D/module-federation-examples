import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {
  count$ = new BehaviorSubject(0);

  increment() {
    this.count$.next(this.count$.getValue() + 1);
  }

  decrement() {
    this.count$.next(this.count$.getValue() - 1);
  }
}
