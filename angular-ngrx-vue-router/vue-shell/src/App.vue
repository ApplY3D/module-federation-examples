<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todos">Todos</router-link>
    </div>

    <button @click="decrement()">-</button>
    {{ store.state.count }}
    <button @click="increment()">+</button>

    <router-view />

    <ng-store-provider :store="{ ...store }" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();

    function increment() {
      store.dispatch('increment');
    }
    function decrement() {
      store.dispatch('decrement');
    }

    return { store, increment, decrement };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
