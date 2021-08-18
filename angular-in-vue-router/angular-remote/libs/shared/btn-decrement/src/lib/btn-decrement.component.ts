import { Component } from '@angular/core';
import { CounterService } from '@angular-remote/shared/counter';

@Component({
  selector: 'btn-increment',
  template: ` <button
    (click)="decrement()"
    mat-raised-button
    color="primary"
    [matBadge]="count$ | async"
    matBadgePosition="before"
    matBadgeColor="accent"
  >
    -1
  </button>`,
})
export class BtnDecrementComponent {
  count$ = this.counterService.count$;

  constructor(private counterService: CounterService) {}

  decrement() {
    this.counterService.decrement();
  }
}
