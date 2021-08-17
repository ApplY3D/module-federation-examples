# Vue Router with federated Angular

## Vue configuration

1. Init Vue with [Vue Router](https://router.vuejs.org/ru/).

2. [Configure webpack](../angular-react-vue/README.md) as you need.

- Don't use `publicPath` property inside `ModuleFederationPlugin` configuration or your routes will be broken:
  - Home - http://localhost:8081/http://localhost:8081/
  - About - http://localhost:8081/http://localhost:8081/about

3. Import Angular styles-provider and connect it to the template:

```html
<template>
  <div>
    <angular-style-provider></angular-style-provider>
    <router-view />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  const ngPromise = Promise.all([
    import('angularApp/utils'),
    import('angularApp/styles'),
  ]);

  ngPromise.then(
    ([{ defineAngularWebComponent }, { StylesProviderComponent }]) =>
      defineAngularWebComponent({
        AngularComponent: StylesProviderComponent,
        name: 'angular-style-provider',
      })
  );

  export default defineComponent({
    name: 'App',
  });
</script>
```

## Angular configuration

1. Init Angular with [nx](https://nx.dev/) and [@angular/material](https://material.angular.io/).

2. [Configure webpack](../angular-react-vue/README.md) as you need.

3. For sharing global Angular styles, create [component](./angular-remote/libs/shared/styles-provider/src/lib/shared-styles.component.ts) with adding to new [shared-styles.css](./angular-remote/libs/shared/styles-provider/src/lib/shared-styles.scss) all css from html (in my case it was material):

`shared-styles.component.ts`

```ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-remote-styles-provider',
  styleUrls: ['./shared-styles.scss'],
  template: '',
  encapsulation: ViewEncapsulation.None,
})
export class StylesProviderComponent {}
```

`shared-styles.scss`

```scss
@use '~@angular/material' as mat;

// relocated from index.html
@import url('https://fonts.gstatic.com');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

// ...
```

> This component must be inserted on page to bring styles to page

4. Create utils to insert Angular app inside Vue inside new [file](./angular-remote/libs/shared/remote-utils/src/lib/index.ts). One way is define Web Component, so I used [@angular/elements](https://angular.io/guide/elements).

5. Export your libraries from Angular:

`webpack.config.js`

```ts
new ModuleFederationPlugin({
  //...
  exposes: {
    './styles': 'libs/shared/styles-provider/src/index',
    './utils': 'apps/angular-app/src/remote-utils',
  },
  //...
});
```

You may also need add path to `remote-utils.ts` your to `tsconfig.app.json`, if some error occur:

**If you exposes library that was never imported into your Angular app, Webpack will drop error**:

```bash
./libs/share/counter/src/index.ts - Error: Module build failed (from ./node_modules/@ngtools/webpack/src/ivy/index.js):
Error: /Users/name/Documents/work/micro-fe/my-mfe-examples/angular-in-vue-router/angular-remote/libs/share/counter/src/index.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.
    at /Users/name/Documents/work/micro-fe/my-mfe-examples/angular-in-vue-router/angular-remote/node_modules/@ngtools/webpack/src/ivy/loader.js:59:26
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
```

I found how to fix it, you might add to your sharing Angular app's [tsconfig.app.json](./angular-remote/apps/angular-app/tsconfig.app.json):

```json
  "files": [
    "src/main.ts",
    "src/polyfills.ts",
    "src/remote-utils.ts", // <-- single file
    "../../libs/shared/counter/src/index.ts" // <-- library
```

6. Added service and [shared like singleton](https://stackoverflow.com/a/64577080)
