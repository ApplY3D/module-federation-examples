import { createApp, defineCustomElement } from 'vue';
// eslint-disable-next-line no-unused-vars
import { App, ComponentPublicInstance } from 'vue';

/**
 * Link to original createApp fn, for more control, flexible use cases
 */
export const createVueApp = createApp;

/**
 * ✅ Renders Vue element to the dom and returns Vue app and element apis
 * @param {Object} props
 * @param {Element} props.VueElement
 * @param {string} props.selector
 * @param {Object.<string, string | function>} props.props If event name is click, you must pass onClick.
 * @returns {{vueApp: App<Element>, vueEl: ComponentPublicInstance}}
 */
export const renderVueElement = ({ VueElement, selector, props }) => {
  const vueApp = createApp(VueElement, props);
  return { vueApp, vueEl: vueApp.mount(selector) };
};

/**
 * ✅ Defines Web Component from Vue element
 *
 * ❗️ shadow dom breaks styles inside "style" tag by default
 * @param {Object} props
 * @param {Element} props.VueElement
 * @param {string} props.name Custom element name, kebab-case
 */
export const defineVueWebComponent = ({ VueElement, name }) => {
  const customEl = defineCustomElement(VueElement);
  customElements.define(name, customEl);
};
