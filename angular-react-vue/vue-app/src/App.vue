<template>
  <div style="background-color: mediumseagreen; height: 94vh; padding: 16px">
    <div style="display: flex;">
      <div id="ng-header" style="flex:1"></div>

      <ng-header
        :title="wcTitle"
        @headerclick="log($event.detail)"
        style="flex:1"
      />
    </div>

    <Header :title="title" @headerclick="log($event)" />

    <div id="react-header"></div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

// function is optional, you may init it without func
function init() {
  // valid imports, but if module is offline app will be dropped
  // import { Header as ReactHeader } from 'reactApp/Header';
  // import { HeaderComponent as AngularHeader } from 'angularApp/Header';
  //
  // so better use import('')

  // <-- React
  const reactPromise = Promise.all([
    import('reactApp/Header'),
    import('reactApp/utils'),
  ]);
  reactPromise.then(([{ Header: ReactHeader }, { renderReactElement }]) => {
    renderReactElement({
      ReactElement: ReactHeader,
      props: {
        title: '✅ custom title works',
        onHeaderClick: this.log,
      },
      selector: '#react-header',
    });
  });
  // --->

  // <-- Angular
  const angularPromise = Promise.all([
    import('angularApp/Header'),
    import('angularApp/utils'),
  ]);
  angularPromise.then(
    ([
      { HeaderComponent: AngularHeader },
      { defineAngularWebComponent, renderAngularComponent },
    ]) => {
      defineAngularWebComponent({
        AngularComponent: AngularHeader,
        name: 'ng-header',
      });

      renderAngularComponent({
        AngularComponent: AngularHeader,
        selector: '#ng-header',
      }).then(({ componentRef }) => {
        componentRef.instance.title = this.title;
        componentRef.changeDetectorRef.detectChanges();
        componentRef.instance.headerclick.subscribe(this.log);
      });
    }
  );
  // --->
}

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      title: '✅ custom title works',
      wcTitle: '🍻 Web Component title',
    };
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
  },
  mounted() {
    // init all external packages when mounted
    // its ok to execute it on imports level
    init.apply(this);
  },
};
</script>
