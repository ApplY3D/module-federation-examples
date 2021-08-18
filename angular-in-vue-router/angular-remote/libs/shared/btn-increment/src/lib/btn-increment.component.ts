import { Component } from '@angular/core';
import { CounterService } from '@angular-remote/shared/counter';

@Component({
  selector: 'btn-increment',
  template: ` <button
    (click)="increment()"
    mat-raised-button
    color="accent"
    [matBadge]="count$ | async"
    matBadgePosition="before"
    matBadgeColor="primary"
  >
    +1
  </button>`,
})
export class BtnIncrementComponent {
  count$ = this.counterService.count$;

  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
}
