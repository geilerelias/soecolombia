<template>
    <v-navigation-drawer v-model="local" app temporary>
        <v-img
            dark
            height="200px"
            src="images/fotos/bcbc1336-d827-4047-9804-13db455d6467.JPG"
        >
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
                <v-col>
                    <div class="subheading">Maria Victoria Aponte</div>
                    <div class="body-1">contacto@mvictoriaaponte.com</div>
                </v-col>
            </v-row>
        </v-img>
        {{ localDrawer }}
        <!-- <v-list>
            <v-list-item v-for="(item, i) in links" :key="i" :to="item.path">
                <v-list-item-icon>
                    <v-icon color="primary">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                    <img :src="item.image" :alt="item.name" />
                </v-list-item-avatar>
            </v-list-item>
        </v-list> -->
    </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
    data(){
        local:false
    },
    watch: {
        local: function (val) {
            cosole.log("get",val);
            return this.drawer;
        },
    },
    computed: {
        ...mapState("drawer"),
        localDrawer: {
            get: function () {
                cosole.log("get");
                return this.drawer;
            },
            set: function (val) {
                console.log("drawer", val);
                this.setDrawer(val);
            }
        }
    },
    methods: {
        ...mapMutations("setDrawer")
    }
};
</script>

<style scoped></style>
