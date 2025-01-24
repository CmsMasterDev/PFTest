import { createI18n } from 'vue-i18n';
import tr from './tr.json'
import en from './en.json'

// Language List
export const messages = {
  tr : tr,
  en : en
}


// Vue I18n
const i18n = createI18n({
   legacy: false,
   locale: 'tr',
   messages,
   missingWarn:true,
   fallbackWarn:false
})



export default i18n;
