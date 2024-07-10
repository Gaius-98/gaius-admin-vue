import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import { uninstallPreLoad } from './utils/tools'
import registerSFEl from './components/SchemaForm/registerSFEl'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(registerSFEl,{
    'code-editor':()=>import('./components/CodeEditor.vue'),
    'color-picker':()=>import('./components/ColorPicker.vue'),
    'image-picker':()=>import('./components/ImagePicker.vue')
})
app.mount('#app')
uninstallPreLoad()
