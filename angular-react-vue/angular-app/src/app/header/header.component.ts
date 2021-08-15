import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <div
    (click)="headerclick.emit('angular clicked')"
    class="angular-header"
  >
    Angular App {{ title }}
  </div>`,
  styles: [
    `
      .angular-header {
        padding: 16px;
        margin: 2px;
        border-radius: 8px;
        background: rgb(255 92 80);
        border: 3px solid rgba(0, 0, 0, 0.6);
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Output() headerclick = new EventEmitter<string>();
}
