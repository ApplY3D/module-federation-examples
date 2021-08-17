import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CounterComponent } from './counter.component';

@NgModule({
  bootstrap: [],
  imports: [CommonModule, MatIconModule, MatBadgeModule],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
