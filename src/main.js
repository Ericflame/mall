import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer, {
  zIndex: 999
})
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
