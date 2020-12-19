<template>
    <div>
        <v-card
            :class="fixed ? 'mb-2' : 'mb-0'"
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
                <v-toolbar-items class="hidden-md-and-down">
                    <v-btn text to="/">inicio</v-btn>
                    <v-btn text to="/quienes-somos">¿Quienes somos?</v-btn>
                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-on="on"
                                color="white"
                                dark
                                text
                                to="/no-mas-violencia"
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
                                    }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-on="on"
                                color="white"
                                dark
                                text
                                to="/empoderamiento"
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
                                    }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-on="on"
                                color="white"
                                dark
                                text
                                to="/servicios"
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
                                    }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-btn text to="/tienda">Tienda</v-btn>
                    <v-btn text to="/contactenos">Contáctenos</v-btn>
                </v-toolbar-items>
                <v-app-bar-nav-icon
                    class="hidden-lg-and-up"
                    color="white"
                    @click="drawer=!drawer"
                />

            </v-app-bar>
        </v-card>

        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                    :value="true"
                    prepend-icon="mdi-account-circle"
                >
                    <template v-slot:activator>
                        <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group
                        :value="true"
                        no-action
                        sub-group
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Admin</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="([title, icon], i) in admins"
                            :key="i"
                            link
                        >
                            <v-list-item-title v-text="title"></v-list-item-title>

                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>

                    <v-list-group
                        no-action
                        sub-group
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Actions</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="([title, icon], i) in cruds"
                            :key="i"
                            link
                        >
                            <v-list-item-title v-text="title"></v-list-item-title>

                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>

        </v-navigation-drawer>

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
export default {
    data() {
        return {
            selectedItem: 0,
            items: [
                { text: 'My Files', icon: 'mdi-folder' },
                { text: 'Shared with me', icon: 'mdi-account-multiple' },
                { text: 'Starred', icon: 'mdi-star' },
                { text: 'Recent', icon: 'mdi-history' },
                { text: 'Offline', icon: 'mdi-check-circle' },
                { text: 'Uploads', icon: 'mdi-upload' },
                { text: 'Backups', icon: 'mdi-cloud-upload' },
            ],
            admins: [
                ['Management', 'mdi-account-multiple-outline'],
                ['Settings', 'mdi-cog-outline'],
            ],
            cruds: [
                ['Create', 'mdi-plus-outline'],
                ['Read', 'mdi-file-outline'],
                ['Update', 'mdi-update'],
                ['Delete', 'mdi-delete'],
            ],
            drawer: false,
            fab: false,
            fixed: false,
            itemsNoMasViolencia: [
                {title: "Sexismo", link: "/no-mas-violencia#sexismo"},
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
                {title: "Testimonios", link: "/empoderamiento#testimonios"}
            ],
            itemsServicios: [{title: "Cursos", link: "/servicios#cursos"}],
            value: false
        };
    },


    methods: {
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
