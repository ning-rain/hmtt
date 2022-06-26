import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/icon.less'
// 引入自建图标组件
import MyIcon from '@/components/MyIcon'
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  MyIcon,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
