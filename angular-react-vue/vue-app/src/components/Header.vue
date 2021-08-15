<template>
  <div @click="onClick()" class="vue-header">
    Welcome to Your Vue.js App {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
  emits: ['headerclick'],
  methods: {
    onClick() {
      this.$emit('headerclick', 'vue clicked');
    },
  },

  /*  If you define style here
    you will able to use styles:
      - inside shadow dom,
      - inside 🍻 Web Components.

      Vue must declare styles[]
    automaticly from <style> tag, 
    but it doesn't happened to me,
    so just copy it.
  */

  // use it for 🍻 Web Components
  styles: [
    `.vue-header {
  padding: 16px;
  margin: 2px;
  border-radius: 8px;
  background: mediumseagreen;
  border: 3px solid rgba(0, 0, 0, 0.6);
}`,
  ],
};
</script>

// use it for default exporting
<style>
.vue-header {
  padding: 16px;
  margin: 2px;
  border-radius: 8px;
  background: mediumseagreen;
  border: 3px solid rgba(0, 0, 0, 0.6);
}
</style>
