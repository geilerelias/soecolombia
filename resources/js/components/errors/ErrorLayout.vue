<template>
    <v-app>

        <transition>
            <router-view></router-view>
        </transition>
    </v-app>
</template>
<script>
export default {

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
