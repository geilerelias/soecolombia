import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
            light: {
                primary: "#9e4373",
                secondary: "#be87a4",
                accent: "#3f51b5",
                error: "#f44336",
                warning: "#ffc107",
                info: "#2196f3",
                success: "#4caf50"
            },
            dark: {
                primary: "#9e4373",
                secondary: "#e91e63",
                accent: "#3f51b5",
                error: "#f44336",
                warning: "#ffc107",
                info: "#2196f3",
                success: "#4caf50"
            }
        }
    }
};

export default new Vuetify(opts);
