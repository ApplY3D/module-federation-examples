import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesProviderComponent } from './shared-styles.component';

@NgModule({
  declarations: [StylesProviderComponent],
  imports: [CommonModule],
  exports: [StylesProviderComponent],
})
export class SharedCoreModule {}
