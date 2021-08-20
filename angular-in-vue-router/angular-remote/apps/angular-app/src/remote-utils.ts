import './polyfills';

import {
  ComponentRef,
  DoBootstrap,
  enableProdMode,
  NgModule,
  NgModuleRef,
  Type,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { CounterNumComponent } from '../src/app/counter-num/counter-num.component';
import { BtnDecrementComponent } from '@angular-remote/shared/btn-decrement';
import { BtnIncrementComponent } from '@angular-remote/shared/btn-increment';

/**
 * Zone must be imported to prevent error:
 * > In this configuration Angular requires Zone.js
 *
 * Or bootstrap module with ngZone: 'noop'
 * .bootstrapModule(EmptyModule, { ngZone: 'noop' })
 */
import 'zone.js';
import { createCustomElement } from '@angular/elements';

let _ngModuleAppProvider: undefined | NgModuleRef<any>;

@NgModule({ imports: [BrowserModule] })
class EmptyModule implements DoBootstrap {
  ngDoBootstrap() {
    console.log('Bootstrapped ng app');
  }
}

const defineExposedModules = () => {
  defineAngularWebComponent(BtnIncrementComponent, 'ng-btn-increment');
  defineAngularWebComponent(BtnDecrementComponent, 'ng-btn-decrement');
  defineAngularWebComponent(CounterNumComponent, 'ng-counter-state');
};

/**
 * Bootstraps Angular app
 *
 * * Might be called once
 */
export const bootstrapAngularApp = async (
  AngularModule: Type<any> = EmptyModule
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
  defineExposedModules();
};

export const renderComponent = (
  AngularComponent: Type<any>,
  selector: string
): ComponentRef<any> => {
  if (!_ngModuleAppProvider) {
    throw new Error('No root module found');
  }

  const { componentFactoryResolver, injector } = _ngModuleAppProvider;

  const ngComponent =
    componentFactoryResolver.resolveComponentFactory(AngularComponent);
  const ngComponentRef = ngComponent.create(injector, undefined, selector);

  return ngComponentRef;
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
