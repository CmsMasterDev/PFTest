import { defineCustomElement, h , getCurrentInstance } from 'vue';
import i18n from './i18n';


export function registerElement(name, component) {


const CustomElement = defineCustomElement({
  name:name,
  setup() {
    const instance = getCurrentInstance();
    instance.appContext.app.use(i18n);
    return () => h(component);
  },
}, { shadowRoot: false });

customElements.define(name, CustomElement);
}
