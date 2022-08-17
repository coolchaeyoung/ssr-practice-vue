import createApp from "./main";

const { app, store } = createApp();

(async (app, store) => {
  const storeInitialState = window.INITIAL_DATA;

  if (storeInitialState) {
    store.replaceState(storeInitialState);
  }
  app.mount("#app");
})(app, store);
