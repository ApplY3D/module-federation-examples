import './polyfills';

import { enableProdMode, NgModuleRef, Type } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { createCustomElement } from '@angular/elements';

/**
 * Zone must be imported to prevent error:
 * > In this configuration Angular requires Zone.js
 *
 * Or bootstrap module with ngZone: 'noop'
 * .bootstrapModule(EmptyModule, { ngZone: 'noop' })
 */
import 'zone.js';

import { AppModule } from './app/app.module';
import { TodosComponent } from './app/todos/todos.component';
import { StoreProvider } from './app/store.provider';

let _ngModuleAppProvider: undefined | NgModuleRef<any>;

/**
 * Bootstraps Angular app
 *
 * * Might be called once
 */
export const bootstrapAngularApp = async (
  AngularModule: Type<any> = AppModule
  // afterNgAppInit: (props: NgModuleRef<any>) => void
) => {
  if (_ngModuleAppProvider) {
    throw new Error('Root module already exists');
  }

  if (environment.production) {
    enableProdMode();
  }

  const ngModuleRef = await platformBrowserDynamic().bootstrapModule(
    AngularModule
  );

  _ngModuleAppProvider = <NgModuleRef<any>>{
    ...ngModuleRef,
  };

  // Better to pass callback to your bootstrapAngularApp:
  // afterNgAppInit(_ngModuleProvider)
  //
  // but for example I did dirty:
  defineAngularWebComponent(TodosComponent, 'ng-todo-list');
  defineAngularWebComponent(StoreProvider, 'ng-store-provider');
};

export const defineAngularWebComponent = (
  AngularComponent: Type<any>,
  name: string
) => {
  if (!_ngModuleAppProvider) {
    throw new Error('No root module found');
  }

  const ngComponentConstructor = createCustomElement(AngularComponent, {
    injector: _ngModuleAppProvider?.injector,
  });
  customElements.define(name, ngComponentConstructor);

  return ngComponentConstructor;
};
