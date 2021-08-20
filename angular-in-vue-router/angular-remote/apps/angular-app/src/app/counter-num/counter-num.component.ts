import { Component } from '@angular/core';
import { CounterService } from '@angular-remote/shared/counter';

@Component({
  selector: 'angular-remote-counter',
  template: `<mat-icon
    [matBadge]="count$ | async"
    matBadgePosition="before"
    matBadgeColor="warn"
    >home</mat-icon
  >`,
})
export class CounterNumComponent {
  count$ = this.counterService.count$;

  constructor(private counterService: CounterService) {}
}
