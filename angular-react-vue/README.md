# Static Module Federation

1.  Init apps

2.  Add some shared components

3.  Setup webpack

    <details>
      <summary> 3.1 Angular: </summary>

    ```bash
    ng add @angular-architects/module-federation
    ```

    Select project if monorepo. All files will be created 😎, just edit `webpack.config.js` to configure [ModuleFederationPlugin](../README.md#plugin-config)
    </details>

    <details>
      <summary> 3.2 Vue: </summary>

    1. Install necessary packages

    ```bash

    yarn add webpack @vue/cli-plugin-babel@5.0.0-beta.2 @vue/cli-service@5.0.0-beta.2 -D

    ```

    or

    ```bash
    npm i webpack @vue/cli-plugin-babel@5.0.0-beta.2 @vue/cli-service@5.0.0-beta.2 -D
    ```

    2. Create [vue.config.js](./src/vue.config.js) that exports [webpack configuration](https://cli.vuejs.org/guide/webpack.html) with [ModuleFederationPlugin setup](https://webpack.js.org/concepts/module-federation/#promise-based-dynamic-remotes)

    3. Create [asynchronous boundary](../README.md#asynchronous-boundary)

    </details>
