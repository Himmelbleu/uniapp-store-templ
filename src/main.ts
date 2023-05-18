import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";
import "./scss/vars.scss";
import "./scss/index.scss";

export function createApp() {
  const app = createSSRApp(App);

  app.config.globalProperties.$uni = uni;

  return {
    app
  };
}
