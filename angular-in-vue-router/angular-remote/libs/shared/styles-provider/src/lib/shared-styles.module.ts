import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesProvider } from './shared-styles.component';

@NgModule({
  declarations: [StylesProvider],
  imports: [CommonModule],
  exports: [StylesProvider],
})
export class SharedCoreModule {}
