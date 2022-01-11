import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css'
import './styles/font.css'
import './styles/global.scss'
import './styles/element-ui.scss'
import './permission'
import directives from './directive'
import i18n from './lang'

Vue.config.productionTip = false
// 可配置全局变量
Vue.prototype.GLOBALVARIABLE = "xxx"

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(directives.animate, directives.auth)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
