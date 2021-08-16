const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

const packageJson = require('./package.json');

module.exports = {
  publicPath: 'http://localhost:8081/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueApp',
        filename: 'remoteEntry.js',
        remotes: {
          angularApp: 'angularApp@http://localhost:4201/remoteEntry.js',
        },
        shared: { ...packageJson.dependencies },
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
};
