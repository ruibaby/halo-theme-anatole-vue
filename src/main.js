import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "@/utils/filter";
import "@/styles/tailwind.css";
import "remixicon/fonts/remixicon.css";

import { ContentApiClient } from "@halo-dev/content-api";
import { HaloRestAPIClient } from "@halo-dev/rest-api-client";

const haloRestApiClient = new HaloRestAPIClient({
  baseUrl: "https://ryanc.cc",
  auth: {
    type: "customizeAuth",
    authHeader: "API-Authorization",
    getToken() {
      return "11111111111111111111111";
    },
  },
});
Vue.prototype.$apiClient = new ContentApiClient(haloRestApiClient);

Vue.config.productionTip = false;
Vue.use(router);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
