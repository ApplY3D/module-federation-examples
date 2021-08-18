import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CounterNumComponent } from './counter-num.component';

@NgModule({
  bootstrap: [],
  imports: [CommonModule, MatIconModule, MatBadgeModule],
  declarations: [CounterNumComponent],
  exports: [CounterNumComponent],
})
export class CounterNumModule {}
