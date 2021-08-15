const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8081/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueApp',
        filename: 'remoteEntry.js',
        remotes: {
          angularApp: 'angularApp@http://localhost:4201/remoteEntry.js',
          reactApp: 'reactApp@http://localhost:3001/remoteEntry.js',
        },
        exposes: {
          './Header': './src/components/Header',
          './utils': './src/utils',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
};
