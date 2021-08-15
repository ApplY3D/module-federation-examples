import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import { ApplicationRef, DoBootstrap, NgModule, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/**
 * Zone must be imported to prevent error:
 * > In this configuration Angular requires Zone.js
 */
import 'zone.js';

@NgModule({ imports: [BrowserModule] })
class EmptyModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {}
}

export const defineAngularWebComponent = ({
  AngularComponent,
  name,
}: {
  AngularComponent: Type<any>;
  name: string;
}) => {
  platformBrowserDynamic()
    .bootstrapModule(EmptyModule)
    .then(({ injector }) => {
      const angularEl = createCustomElement(AngularComponent, { injector });
      customElements.define(name, angularEl);
    });
};
