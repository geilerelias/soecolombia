<template>
    <v-app>
        <drawer-component></drawer-component>
        <header-component></header-component>

        <v-main>

                <slot>
                </slot>
        </v-main>

        <footer-component></footer-component>
    </v-app>
</template>
<script>
import header from "@/Base/Header.vue";
import drawer from "@/Base/Drawer.vue";
import footer from "@/Base/Footer.vue";


export default {
    name: "AppLayout",
    components: {
        "header-component": header,
        "drawer-component": drawer,
        "footer-component": footer
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



