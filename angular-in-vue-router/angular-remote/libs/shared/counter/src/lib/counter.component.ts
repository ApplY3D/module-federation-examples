import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  template: `<mat-icon
    [matBadge]="count$ | async"
    matBadgePosition="before"
    matBadgeColor="warn"
    >home</mat-icon
  >`,
})
export class CounterComponent {
  count$ = this.counterService.count$;

  constructor(private counterService: CounterService) {}
}
