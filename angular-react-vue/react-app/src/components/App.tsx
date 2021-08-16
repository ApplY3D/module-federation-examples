import React from 'react';
import { useEffect } from 'react';
import { Header } from './Header';

const flex1 = { flex: 1 };
const displayFlex = { display: 'flex' };
const wrapperStyle = {
  backgroundColor: 'rgb(97, 218, 251)',
  height: '94vh',
  padding: '16px',
};

function log(msg: string) {
  console.log(msg);
}

function logWC(event: CustomEvent) {
  console.log(event.detail);
}

export const App = () => {
  const title = '✅ custom title works';
  const wcTitle = '🍻 Web Component title';

  useEffect(() => {
    async function init() {
      try {
        const vuePromise = Promise.all([
          //@ts-expect-error
          import('vueApp/Header'),
          //@ts-expect-error
          import('vueApp/utils'),
        ]);
        vuePromise.then(
          ([
            { default: VueHeader },
            { renderVueElement, defineVueWebComponent },
          ]) => {
            const { vueApp, vueEl } = renderVueElement({
              VueElement: VueHeader,
              selector: '#vue-header',
              props: { title, onHeaderclick: log },
            });

            defineVueWebComponent({
              VueElement: VueHeader,
              name: 'vue-header',
            });
          }
        );

        const angularPromise = Promise.all([
          //@ts-expect-error
          import('angularApp/Header'),
          //@ts-expect-error
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
            }).then(({ componentRef }: any) => {
              componentRef.instance.title = title;
              componentRef.changeDetectorRef.detectChanges();
              componentRef.instance.headerclick.subscribe(log);
            });
          }
        );

        const ngHeader = document.createElement('ng-header');
        ngHeader.title = wcTitle;
        ngHeader.addEventListener('headerclick', (e) =>
          logWC(e as CustomEvent)
        );
        document.getElementById('ng-header-wc')?.appendChild(ngHeader);
      } catch (error) {}
    }

    init();
  }, []);

  return (
    <div style={wrapperStyle}>
      <div style={displayFlex}>
        <div id='ng-header' style={flex1} />
        <div id='ng-header-wc' style={flex1} />
      </div>

      <div style={displayFlex}>
        <div id='vue-header' style={flex1}></div>

        {/* @ts-expect-error */}
        <vue-header style={flex1} title={wcTitle} />
      </div>

      <Header onHeaderClick={log} />
    </div>
  );
};
