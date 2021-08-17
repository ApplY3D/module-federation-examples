import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import {
  ApplicationRef,
  ComponentRef,
  DoBootstrap,
  NgModule,
  NgModuleRef,
  Type,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/**
 * Zone must be imported to prevent error:
 * > In this configuration Angular requires Zone.js
 *
 * Or bootstrap module with ngZone: 'noop'
 * .bootstrapModule(EmptyModule, { ngZone: 'noop' })
 */
import 'zone.js';

@NgModule({ imports: [BrowserModule] })
class EmptyModuleWC {
  ngDoBootstrap() {
    return 1;
  }
}

export const defineAngularWebComponent = ({
  AngularComponent,
  name,
}: {
  AngularComponent: Type<any>;
  name: string;
}) => {
  return platformBrowserDynamic()
    .bootstrapModule(EmptyModuleWC)
    .then(({ injector }) => {
      const angularEl = createCustomElement(AngularComponent, { injector });
      customElements.define(name, angularEl);
    });
};

type TRenderReturn = NgModuleRef<any> & {
  componentRef: ComponentRef<Type<any>>;
};

interface IRenderAngularComponent {
  (props: {
    AngularComponent: Type<any>;
    selector: string | Element;
  }): Promise<TRenderReturn>;
}

export const renderAngularComponent: IRenderAngularComponent = ({
  AngularComponent,
  selector,
}) => {
  let componentRef: ComponentRef<typeof AngularComponent>;

  @NgModule({ imports: [BrowserModule] })
  class EmptyModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef) {
      componentRef = appRef.bootstrap(AngularComponent, selector);
    }
  }

  return platformBrowserDynamic()
    .bootstrapModule(EmptyModule)
    .then((props) => {
      const newProps = { ...props, componentRef } as TRenderReturn;
      return newProps;
    });
};
