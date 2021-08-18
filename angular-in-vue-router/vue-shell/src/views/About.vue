<template>
  <div class="about">
    <h1>This is an about page lazy loaded</h1>
    <ng-btn-decrement></ng-btn-decrement>
    <span style="margin: 0 32px;">
      <ng-counter-state></ng-counter-state>
    </span>
    <ng-btn-increment></ng-btn-increment>
    <h2>...with saved components state</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const ngPromise = Promise.all([
  import('angularApp/utils'),
  import('angularApp/btn-increment'),
  import('angularApp/btn-decrement'),
  import('angularApp/counter-state'),
]);

ngPromise.then(
  ([
    { defineAngularWebComponent },
    { BtnIncrementComponent },
    { CounterNumComponent },
  ]) => {
    defineAngularWebComponent({
      AngularComponent: CounterNumComponent,
      name: 'ng-counter-state',
    });
    defineAngularWebComponent({
      AngularComponent: BtnIncrementComponent,
      name: 'ng-btn-increment',
    });
    defineAngularWebComponent({
      AngularComponent: BtnIncrementComponent,
      name: 'ng-btn-decrement',
    });
  }
);

export default defineComponent({
  name: 'About',
});
</script>
