import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 引入公共组件
import Divder from '@/components/common/Divder.vue'
Vue.component("divder",Divder)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
