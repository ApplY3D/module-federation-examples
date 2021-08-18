import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { BtnIncrementComponent } from './btn-increment.component';

@NgModule({
  declarations: [BtnIncrementComponent],
  exports: [BtnIncrementComponent],
  imports: [CommonModule, MatBadgeModule, MatButtonModule],
})
export class BtnIncrementModule {}
