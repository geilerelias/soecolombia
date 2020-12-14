window.Vue = require("vue");
window.Event = new Vue();

import NProgress from "nprogress";
import Vuetify from "vuetify";

import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import 'nprogress/nprogress.css'


Vue.use(Vuetify);
Vue.use(PerfectScrollbar);

import store from "./store";
import router from "./routes.js";
import Auth from "./auth.js";
import Api from "./api.js";

window.auth = new Auth();
window.api = new Api();

Vue.component("vue-app", require("./App.vue").default);
const opts = {
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
            light: {
                primary: '#9e4373',
                secondary: '#be87a4',
                accent: '#3f51b5',
                error: '#f44336',
                warning: '#ffc107',
                info: '#2196f3',
                success: '#4caf50'
            },
            dark: {
                primary: '#9e4373',
                secondary: '#e91e63',
                accent: '#3f51b5',
                error: '#f44336',
                warning: '#ffc107',
                info: '#2196f3',
                success: '#4caf50'
            },
        },
    },
}

const app = new Vue({
    el: "#app",
    vuetify: new Vuetify(opts),
    store,
    router
});
