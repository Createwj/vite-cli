import { createApp } from 'vue'
import router, { setupRouter } from '@/router/index'
import App from './App.vue'
import 'style/tailwind.css'
import 'vue-global-api'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}
bootstrap()
