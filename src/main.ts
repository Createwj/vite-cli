import { createApp } from "vue";
import router, { setupRouter } from "@/router/index.js";
import App from "./App.vue";

import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = createApp(App);

setupRouter(app);
await router.isReady();
app.mount("#app");
