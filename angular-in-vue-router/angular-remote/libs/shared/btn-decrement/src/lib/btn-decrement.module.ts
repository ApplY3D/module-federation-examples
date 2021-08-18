import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { BtnDecrementComponent } from './btn-decrement.component';

@NgModule({
  declarations: [BtnDecrementComponent],
  exports: [BtnDecrementComponent],
  imports: [CommonModule, MatBadgeModule, MatButtonModule],
})
export class BtnIncrementModule {}
