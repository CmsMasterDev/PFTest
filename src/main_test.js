import './assets/main.css'
import { createApp , defineCustomElement , provide , h ,getCurrentInstance } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'



// Day.Js
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);
window.dayjs = dayjs


import App from './App.vue'

const MyComponentElement = defineCustomElement({
  setup() {
    const instance = getCurrentInstance();
    instance.appContext.app.use(i18n);
    return () => h(App);
  },
});

customElements.define('main-element', MyComponentElement)


// const { t } = useI18n({ i18n });

// const app = createApp(App)
// app.use(createPinia())
// app.mount('#app')
