import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(vueAxios, axios)

new Vue({
    render: function (h) { return h(App) },
}).$mount('#app')
