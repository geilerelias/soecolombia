<template>
    <div>
        <v-card
            color="white"
            flat
            tile
            class="mb-0 pb-0"
            :class="fixed ? 'mb-2' : 'mb-0'"
        >
            <v-toolbar
                :prominent="$vuetify.breakpoint.smAndDown ? false : true"
                class="elevation-0  d-flex align-center align-stretch"
                :class="$vuetify.breakpoint.smAndDown ? 'my-4' : ''"
            >
                <v-toolbar-title
                    class="primary--text font-weight-black display-1 light text-truncate"
                >
                    <v-avatar
                        :size="$vuetify.breakpoint.smAndDown ? '50' : '100'"
                        color="primary"
                    >
                        <v-img
                            :src="
                                require('@/images/logo-soe-circular-morado.png')
                            "
                            aspect-ratio="1"
                            contain
                        ></v-img>
                    </v-avatar>

                    <span
                        :class="
                            $vuetify.breakpoint.smAndDown
                                ? 'headline font-weight-black'
                                : ''
                        "
                        >Soy Empoderamiento</span
                    >
                </v-toolbar-title>
            </v-toolbar>
            <v-app-bar
                dense
                color="primary"
                class="white--text"
                dark
                :fixed="fixed"
            >
                <v-app-bar-nav-icon
                    class="hidden-lg-and-up"
                ></v-app-bar-nav-icon>
                <v-toolbar-title class="font-weight-black headline ">
                    SOE Colombia
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-md-and-down">
                    <v-btn text to="/">inicio</v-btn>
                    <v-btn text to="/quienes-somos">¿Quienes somos?</v-btn>
                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                text
                                to="/no-mas-violencia"
                                color="white"
                                dark
                                v-on="on"
                            >
                                No mas violencia
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in itemsNoMasViolencia"
                                :key="index"
                                :href="item.link"
                            >
                                <v-list-item-title>{{
                                    item.title
                                }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                text
                                to="/empoderamiento"
                                color="white"
                                dark
                                v-on="on"
                            >
                                Empoderamiento
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in itemsEmpoderamiento"
                                :key="index"
                                :to="item.link"
                            >
                                <v-list-item-title>{{
                                    item.title
                                }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                text
                                to="/servicios"
                                color="white"
                                dark
                                v-on="on"
                            >
                                Servicios
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in itemsServicios"
                                :key="index"
                                :href="item.link"
                            >
                                <v-list-item-title>{{
                                    item.title
                                }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-btn text to="/tienda">Tienda</v-btn>
                    <v-btn text to="/contactenos">Contáctenos</v-btn>
                </v-toolbar-items>
            </v-app-bar>
        </v-card>
        <v-btn
            v-show="fab"
            fab
            color="primary"
            dark
            fixed
            bottom
            right
            @click="toTop"
            v-scroll="onScroll"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            fab: false,
            fixed: false,
            itemsNoMasViolencia: [
                { title: "Sexismo", link: "/no-mas-violencia#sexismo" },
                {
                    title: "Un relato sobre vivencias guardadas de mujeres",
                    link: "/no-mas-violencia#testimonios"
                }
            ],
            itemsEmpoderamiento: [
                {
                    title: "Emprendimiento Económico",
                    link: "/empoderamiento#emprendimiento-económico"
                },
                { title: "Testimonios", link: "/empoderamiento#testimonios" }
            ],
            itemsServicios: [{ title: "Cursos", link: "/servicios#cursos" }],
            value: false
        };
    },
    computed: {
        ...mapState(["drawer"])
    },

    methods: {
        ...mapMutations(["setDrawer"]),
        toTop() {
            this.$vuetify.goTo(0);
        },
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            if (top > 120) {
                this.fab = true;
                this.fixed = true;
            } else {
                this.fab = false;
                this.fixed = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
