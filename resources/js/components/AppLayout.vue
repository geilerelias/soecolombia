<template>
    <v-app>
        <drawer-component></drawer-component>
        <header-component></header-component>

        <v-main style="min-height: 100vh">
            <transition name="fade"
                        mode="out-in" duration="400">
                <router-view></router-view>
            </transition>
        </v-main>

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
