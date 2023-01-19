<template>
    <v-card
        :class="[fixed  ? 'pt-12' : 'pt-0',$vuetify.breakpoint.smAndDown && fixed?'pt-12':'pt-0']"
        class="mb-0 pb-0"
        color="white"
        flat
        tile
    >
        <v-toolbar
            :class="$vuetify.breakpoint.smAndDown ? 'my-4' : ''"
            :prominent="!$vuetify.breakpoint.smAndDown"
            class="elevation-0  d-flex align-center align-stretch"
        >
            <v-toolbar-title
                class="primary--text font-weight-black display-1 light text-truncate"
            >
                <v-avatar
                    :size="$vuetify.breakpoint.smAndDown ? '50' : '100'"
                    class="mr-md-0 mr-2 "
                    color="primary"
                >
                    <v-img
                        src="src/images/null/logo-soe-circular-morado.png"
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
                >Soy Empoderamiento</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-app-bar
            :fixed="fixed"
            class="white--text"
            color="primary"
            dark
            dense
            :collapse="!collapseOnScroll && $vuetify.breakpoint.smAndDown"
            :collapse-on-scroll="collapseOnScroll && $vuetify.breakpoint.smAndDown"
        >

            <v-toolbar-title class="font-weight-black headline ">
                SOE Colombia
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-md-and-down">
                <template v-for="item in menu">
                    <v-btn v-if="!item.submenu"
                           active-class="primary"
                           :class="route().current(item.to)?'v-btn--active':''"
                           @click="redirigir(item.to)" text v-text="item.title">
                    </v-btn>

                    <v-menu :key="item.id" v-else offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-on="on"
                                active-class="primary"
                                :class="route().current(item.to)?'v-btn--active':''"
                                @click="redirigir(item.to)"
                                color="white"
                                dark
                                text
                                v-text="item.title"
                            >
                            </v-btn>

                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(itemSubmenu, index) in item.submenu"
                                :key="index"
                                :href="itemSubmenu.link"
                            >
                                <v-list-item-title>{{
                                        itemSubmenu.title
                                    }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-toolbar-items>

            <v-app-bar-nav-icon
                class="hidden-lg-and-up"
                color="white"
                @click="drawer ? setDrawer(false) : setDrawer(true)"
            />
        </v-app-bar>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            @click="toTop"
            color="primary"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </v-card>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import {router} from '@inertiajs/vue2'

export default {
    data() {
        return {
            offsetTop: 0,
            fab: false,
            fixed: false,
            value: false,
            collapseOnScroll: true,
        };
    },
    computed: {
        ...mapState(["drawer", "numero", "menu"]),

    },

    methods: {
        ...mapMutations([
            "setDrawer",
            "aumentar"
        ]),
        redirigir(to) {
            router.visit(route(to));
        },
        toTop() {
            this.$vuetify.goTo(0);
        },
        onScroll(e) {
            if (typeof window === "undefined") return;
            this.offsetTop = window.pageYOffset || e.target.scrollTop || 0;
            if (this.$vuetify.breakpoint.smAndDown) {
                if (this.offsetTop > 88) {
                    this.fab = true;
                    this.fixed = true;
                } else {
                    this.fab = false;
                    this.fixed = false;
                }
            } else {
                if (this.offsetTop > 127) {
                    this.fab = true;
                    this.fixed = true;
                } else {
                    this.fab = false;
                    this.fixed = false;
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
