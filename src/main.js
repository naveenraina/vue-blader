import Vue from 'vue'
import App from './App.vue'

import SampleComponent1 from './components/SampleComponent1'
import SampleComponent2 from './components/SampleComponent2'

Vue.config.productionTip = false
Vue.component('SampleComponent1', SampleComponent1)
Vue.component('SampleComponent2', SampleComponent2)

new Vue({
  render: h => h(App)
}).$mount('#app')
