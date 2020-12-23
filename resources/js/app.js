window.Vue = require("vue");
window.Event = new Vue();

import vuetify from "@/plugins/vuetify"; // path to vuetify export

import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

import store from "./store";
import router from "./routes.js";

Vue.use(PerfectScrollbar);

Vue.component("vue-app", require("./App.vue").default);

const app = new Vue({
    el: "#app",
    vuetify,
    store,
    router
});
