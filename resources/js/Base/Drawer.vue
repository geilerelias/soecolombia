<template>
    <v-navigation-drawer v-model="localDrawer" app temporary>
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="/src/images/null/logo-soe-circular-morado.png"></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        SOE Colombia
                    </v-list-item-title>
                    <v-list-item-subtitle>soe@mvictoriaaponte.co</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list class="" >
            <span v-for="item in menu">
                <v-list-item v-if="!item.submenu" color="secondary lighten-3 "
                             link
                             :class="route().current(item.to)?'secondary lighten-3  v-list-item--active':''"
                             @click="redirigir(item.to)">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item>

                <v-list-group
                    color="primary"
                    :class="route().current(item.to)?'secondary lighten-3   v-list-item--active':''"
                    :prepend-icon="item.icon"
                    v-else
                >
                    <template v-slot:activator>
                        <v-list-item-content @click="redirigir(item.to)">
                            <v-list-item-title >{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(submenu, i) in item.submenu"
                        :key="i"
                        link
                        @click="redirigir(submenu.link)"
                    >
                        <v-list-item-title v-text="submenu.title"></v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </span>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import {router} from '@inertiajs/vue2'
import route from "ziggy-js/src/js";

export default {

    computed: {
        ...mapState(["drawer", "menu"]),
        localDrawer: {
            get() {
                return this.drawer;
            },
            set(val) {
                this.setDrawer(val);
            }
        }
    },
    methods: {
        route,
        redirigir(to) {
            router.visit(route(to));
        },
        ...mapMutations([
            "setDrawer",
            "setPage",
            "setColor",
            "setFlat",
            "setPagePrincipal"
        ]),
    }
}
</script>

<style scoped>

</style>
