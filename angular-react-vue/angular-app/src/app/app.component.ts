import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '✅ custom title works';
  wcTitle = '🍻 Web Component title';

  log(msg: string) {
    console.log(msg);
  }

  logWC(event: Event) {
    this.log((<CustomEvent>event).detail[0]);
  }

  async ngOnInit() {
    //@ts-expect-error
    const { default: VueHeader } = await import('vueApp/Header');
    const { defineVueWebComponent } = await import(
      //@ts-expect-error
      'vueApp/utils'
    );
    defineVueWebComponent({ VueElement: VueHeader, name: 'vue-header' });
  }

  // also works inside ngOnInit
  async ngAfterViewInit() {
    try {
      //@ts-expect-error
      const { Header: ReactHeader } = await import('reactApp/Header');
      //@ts-expect-error
      const { renderReactElement } = await import('reactApp/utils');
      //@ts-expect-error
      const { default: VueHeader } = await import('vueApp/Header');
      const { renderVueElement, createVueApp } = await import(
        //@ts-expect-error
        'vueApp/utils'
      );

      renderReactElement({
        ReactElement: ReactHeader,
        selector: '#react-header',
        props: {
          title: this.title,
          onHeaderClick: this.log,
        },
      });

      const { vueApp, vueEl } = renderVueElement({
        VueElement: VueHeader,
        selector: '#vue-header',
        props: { title: this.title, onHeaderclick: this.log },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
