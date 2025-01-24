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


registerElement('main-element',App)
registerElement('example-widget',Widget)
