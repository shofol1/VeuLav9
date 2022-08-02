import "./bootstrap";
import { createApp } from "vue";
import App from "./layouts/app.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
