import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(mLibs).use(router).mount('#app')
