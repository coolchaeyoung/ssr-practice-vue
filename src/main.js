import { createApp, createSSRApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

export default () => {
  const isSSR = process.env.VUE_APP_SSR;

  const app = (isSSR ? createSSRApp : createApp)(App);
  app.use(store).use(router);

  return {
    app,
    router,
    store,
  };
};
