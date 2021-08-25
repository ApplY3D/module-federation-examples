import { Component, Input, SimpleChanges } from '@angular/core';

@Component({ template: '' })
export class StoreProvider {
  @Input() store: any;

  ngOnInit() {
    setInterval(() => {
      this.store.dispatch('increment');
    }, 5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.store.currentValue);
  }
}
