import Vue from 'vue'
import App from './App.vue'
import store from "./store";

import ListTemplate from './components/ListTemplate'
import ListSectionType from './components/ListSectionType'
import ListSection from './components/ListSection'
import DetailTemplate from './components/DetailTemplate'
import DetailSectionType from './components/DetailSectionType'
import DetailSection from './components/DetailSection'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false
Vue.component('ListTemplate', ListTemplate)
Vue.component('ListSectionType', ListSectionType)
Vue.component('ListSection', ListSection)
Vue.component('DetailTemplate', DetailTemplate)
Vue.component('DetailSectionType', DetailSectionType)
Vue.component('DetailSection', DetailSection)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
