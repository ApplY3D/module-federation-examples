import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div class="angular-header" >Welcome to Your Angular App</div>',
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
export class HeaderComponent {}
