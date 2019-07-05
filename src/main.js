import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Bootstrap from '@/bootstrap'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-components-web/dist/material-components-web.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false
Vue.use(Bootstrap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
