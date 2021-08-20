<template>
  <div>
    <ng-btn-decrement />
    <span style="margin: 0 32px;">
      <ng-counter-state />
    </span>
    <ng-btn-increment />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
