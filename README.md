# Module Federation impl examples

Read more:

- [Module Federation](https://webpack.js.org/concepts/module-federation/)
  - [github with examples](https://github.com/module-federation/module-federation-examples)

## General rules:

<a name="plugin-config"></a>

- Configure webpack [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin/)

<a name="asynchronous-boundary"></a>

- Use `bootstrap.js` files to redefine entry points with asynchronous boundary is strongly recommended way:

  > But if you `exposes` and also `remotes` application (bidirectional way), it is **necessary**

  - Cut everything from your entry file, for example - `main.js` to some other file, for example - `bootstrap.js`;
  - Use `import` function inside this `main.js`:

  `index.js`

  ```ts
  import('./bootstrap');
  ```

  `bootstrap.js`

  ```ts
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  ReactDOM.render(<App />, document.getElementById('root'));
  ```

  Check [example](./react-app/src/index.tsx)

## Useful links that helped me

- [[indepth.dev] Zack Jackson | Webpack 5 Module Federation: A game-changer in JavaScript architecture](https://indepth.dev/posts/1173/webpack-5-module-federation-a-game-changer-in-javascript-architecture)

- [[YouTube] Lukas Ruebbelke | ng-conf | Framework Inception with Micro Frontend Composition](https://www.youtube.com/watch?v=6c8HiVpMWvs&ab_channel=ng-conf) - great example with socket io live monitoring

  - [github](https://github.com/briebug/ng-module-republic)

- [[YouTube] Jason Neal | ng-conf | Micro Frontend Architecture in 5 Minutes](https://www.youtube.com/watch?v=VIudN_S9EhY&ab_channel=ng-conf)

  - [github](https://github.com/jtneal/ng-grill)

- [[YouTube] Jack Herrington | Vue + React Module Federation](https://www.youtube.com/watch?v=ICeH3uBGGeo&ab_channel=JackHerrington)

  - [github](https://github.com/jherr/mf-dog-site)

- [[YouTube] Manfred Steyer | AngularAir | Using Module Federation in Angular v11](https://www.youtube.com/watch?v=t42MGQfJuDI&ab_channel=AngularAir)
