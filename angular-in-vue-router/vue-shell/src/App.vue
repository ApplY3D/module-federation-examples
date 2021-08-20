<template>
  <div>
    <angular-style-provider></angular-style-provider>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: () => ({
    bootstrapped: false,
  }),
  async created() {
    try {
      const { defineAngularWebComponent } = await import('angularApp/utils');
      const { StylesProviderComponent } = await import('angularApp/styles');

      defineAngularWebComponent(
        StylesProviderComponent,
        'angular-style-provider'
      );
    } catch (error) {
      console.error(error);
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
