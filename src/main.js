import Vue from 'vue'
import App from './App.vue'

import router from './router'
import '@/utils/filter'
import '@/styles/tailwind.css'
import 'remixicon/fonts/remixicon.css'

Vue.config.productionTip = false
Vue.use(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')