const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueApp',
        filename: 'remoteEntry.js',
        remotes: {
          angularApp: 'angularApp@http://localhost:4201/remoteEntry.js',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
};
