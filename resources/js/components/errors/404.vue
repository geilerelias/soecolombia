<template>
    <div>
        <v-container class="text-center d-flex justify-center align-center mb-6" style="min-height: 100vh">
            <div>
                <h1 class="h1 primary--text" style="font-size: 6rem">404 </h1>

                <p>La página a la que está intentando acceder no está en el servidor (error 404. Page not found) </p>
                <div class="d-flex  justify-start">
                    <div>
                        <p class="caption">Prueba uno de los siguientes enlaces</p>
                        <v-list shaped dense>
                            <v-list-item-group
                                color="primary"
                            >
                                <v-list-item
                                    v-for="(item, i) in menu"
                                    :to="item.to"
                                    :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content class="text-left">
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                </div>
                <v-btn
                    class="ma-2 v-btn--active primary--text active"
                    color="primary"
                    outlined
                    to="/"
                >
                    Ir a Inicio
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
    data: () => ({
        loading: false,
        selection: 1,


    }),
    computed: {
        ...mapState(["menu"]),
    },
    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>

<style lang="scss" scoped></style>
