import './assets/main.css'
import { createApp , defineCustomElement} from 'vue'
import { createPinia } from 'pinia'
import { registerElement } from './registerElements';

// import '@splidejs/splide/dist/css/themes/splide-default.min.css';


// Day.Js
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);
window.dayjs = dayjs


import App from './components/App.vue'

import Widget from './components/Widget.vue'

// Vue Instance
const app = createApp({
  data() {
      return {
        loading: true,
        routerKey:'',
        title:''
      }
    }
})



registerElement('main-element',App)
registerElement('example-widget',Widget)




// const { t } = useI18n({ i18n });

// const app = createApp(App)
// app.use(createPinia())
// app.mount('#app')
