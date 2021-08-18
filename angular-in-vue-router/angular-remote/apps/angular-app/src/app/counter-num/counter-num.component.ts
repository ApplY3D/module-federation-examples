import { ChangeDetectorRef, Component } from '@angular/core';
import { CounterService } from '@angular-remote/shared/counter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'angular-remote-counter',
  template: `<mat-icon
    [matBadge]="count"
    matBadgePosition="before"
    matBadgeColor="warn"
    >home</mat-icon
  >`,
})
export class CounterNumComponent {
  count?: number;
  sub?: Subscription;

  constructor(
    private counterService: CounterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sub = this.counterService.count$.subscribe((value) => {
      this.count = value;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this?.sub.unsubscribe();
    }
  }
}
