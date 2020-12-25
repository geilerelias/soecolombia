<template>
    <div>
        <v-card
            :class="[fixed  ? 'pt-12' : 'pt-0',$vuetify.breakpoint.smAndDown && fixed?'pt-12':'pt-0']"
            class="mb-0 pb-0"
            color="white"
            flat
            tile
        >
            <v-toolbar
                :class="$vuetify.breakpoint.smAndDown ? 'my-4' : ''"
                :prominent="$vuetify.breakpoint.smAndDown ? false : true"
                class="elevation-0  d-flex align-center align-stretch"
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
                :fixed="fixed"
                class="white--text"
                color="primary"
                dark
                dense
            >

                <v-toolbar-title class="font-weight-black headline ">
                    SOE Colombia
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items v-for="item in menu" :key="item.id" class="hidden-md-and-down">
                    <v-btn v-if="!item.submenu" :to="item.to" text v-text="item.title"></v-btn>
                    <v-menu v-else offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-on="on"
                                :to="item.to"
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
                </v-toolbar-items>

                <v-app-bar-nav-icon
                    class="hidden-lg-and-up"
                    color="white"
                    @click="drawer ? setDrawer(false) : setDrawer(true)"
                />
            </v-app-bar>
<!--            <v-row
                align="center"
                justify="center"
            >
                <v-subheader>Offset Top</v-subheader>
                {{ offsetTop }}
            </v-row>-->
        </v-card>

        <v-btn
            v-show="fab"
            v-scroll="onScroll"
            bottom
            color="primary"
            dark
            fab
            fixed
            right
            @click="toTop"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";

export default {

    data() {
        return {
            offsetTop: 0,
            fab: false,
            fixed: false,
            value: false
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
};
</script>

<style lang="scss" scoped></style>
