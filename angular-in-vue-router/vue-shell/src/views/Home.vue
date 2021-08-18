<template>
  <div>
    <ng-btn-decrement></ng-btn-decrement>
    <ng-counter-state></ng-counter-state>
    <ng-btn-increment></ng-btn-increment>
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
    { BtnDecrementComponent },
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
      AngularComponent: BtnDecrementComponent,
      name: 'ng-btn-decrement',
    });
  }
);

export default defineComponent({
  name: 'Home',
});
</script>
