import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLang } from '../utils/storage'
import elementEnLocale from 'element-ui/lib/locale/lang/en' 
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    // 第三方库语言
    ...elementEnLocale,
    // 本地化语言
    ...enLocale
  },
  zh: {
    // 第三方库语言
    ...elementZhLocale,
    // 本地化语言
    ...zhLocale
  }
}

export function getLanguage() {
  const chooseLanguage = getLang()
  if (chooseLanguage) return chooseLanguage

  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale.toLowerCase()) > -1) {
      return locale
    }
  }
  // 默认en
  return 'en'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n
