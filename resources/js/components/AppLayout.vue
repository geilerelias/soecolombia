<template>
    <v-app>
        <drawer-component></drawer-component>
        <header-component></header-component>

        <transition align="center"
                    justify="center">
            <router-view></router-view>
        </transition>

        <footer-component></footer-component>
    </v-app>
</template>
<script>
export default {
    components: {
        "header-component": () => import("./base/Header.vue"),
        "drawer-component": () => import("./base/Drawer.vue"),
        "footer-component": () => import("./base/Footer.vue")
    }
};
</script>
<style>
.video-bg {
    height: 80%;
    width: 100%;
}

video {
    width: 100%;
    height: auto;
}
</style>
