import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import { uninstallPreLoad } from './utils/tools'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
uninstallPreLoad()
