import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div class="angular-header" >Welcome to Your Angular App</div>',
  styles: [
    `
      .angular-header {
        padding: 16px;
        border-radius: 8px;
        background: red;
      }
    `,
  ],
})
export class HeaderComponent {}
