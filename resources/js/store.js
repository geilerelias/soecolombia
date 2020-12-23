import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        numero: 10,
        drawer: false,
        search: "",
        page: "",
        flat: "",
        menu: [
            {
                to: "/",
                icon: "mdi-home-outline",
                title: "Inicio",
                submenu: false
            },
            {
                to: "/quienes-somos",
                icon: "mdi-account-group-outline",
                title: "¿Quienes somos?",
                submenu: false
            },
            {
                to: "/no-mas-violencia",
                icon: "mdi-hand-left",
                title: "No mas violencia",
                submenu: [
                    { title: "Sexismo", link: "/no-mas-violencia#sexismo" },
                    {
                        title: "Un relato sobre vivencias guardadas de mujeres",
                        link: "/no-mas-violencia#testimonios"
                    }
                ]
            },
            {
                to: "/empoderamiento",
                icon: "mdi-certificate-outline",
                title: "Empoderamiento",
                submenu: [
                    {
                        title: "Emprendimiento Económico",
                        link: "/empoderamiento#emprendimiento-económico"
                    },
                    {
                        title: "Testimonios",
                        link: "/empoderamiento#testimonios"
                    }
                ]
            },
            {
                to: "/servicios",
                icon: "mdi-face-agent",
                title: "Servicios",
                submenu: [{ title: "Cursos", link: "/servicios#cursos" }]
            },
            {
                to: "/tienda",
                icon: "mdi-storefront-outline",
                title: "Tienda",
                submenu: false
            },
            {
                to: "/contactenos",
                icon: "mdi-card-account-phone-outline",
                title: "Contáctenos",
                submenu: false
            }
        ]
    },
    getters: {
        getDrawer(state) {
            return state.drawer;
        },
        getSearch(state) {
            return state.search;
        },
        getPage(state) {
            return state.page;
        },
        getFlat(state) {
            return state.flat;
        }
    },
    mutations: {
        setDrawer(state, v) {
            state.drawer = v;
        },
        setSearch(state, v) {
            state.search = v;
        },
        setPage(state, v) {
            state.page = v;
        },
        setFlat(state, v) {
            state.flat = v;
        },
        aumentar(state) {
            state.numero++;
        }
    },
    actions: {}
});

export default store;
