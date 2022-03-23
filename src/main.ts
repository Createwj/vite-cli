import { createApp } from 'vue'
import router, { setupRouter } from '@/router/index.js'
import App from './App.vue'

import 'style/tailwind.css'

const app = createApp(App)
setupRouter(app)
await router.isReady()
app.mount('#app')
