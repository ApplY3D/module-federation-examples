import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SharedCoreModule } from '@shared/styles-provider';

import { AppComponent } from './app.component';
import { CounterNumModule } from './counter-num/counter-num.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedCoreModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    CounterNumModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
