<template>
  <div class="about">
    <h1>This is an about page lazy loaded</h1>
    <ng-btn-decrement />
    <span style="margin: 0 32px;">
      <ng-counter-state />
    </span>
    <ng-btn-increment />
    <h2>...with saved components state</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>
