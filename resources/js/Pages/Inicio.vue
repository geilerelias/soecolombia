<template>
    <app-layout>
        <v-carousel cycle height="75vh">
            <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            >
            </v-carousel-item>
        </v-carousel>
        <v-container>
            <v-card class="pa-0" color="black">
                <video ref="videoPlayer" autoplay controls class="mb-0 pb-0">
                    <source
                        src="videos/Video 1. Presentación.mp4"
                        type="video/mp4"
                    />
                </video>
            </v-card>
        </v-container>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
    components: {AppLayout},
    data() {
        return {
            items: [
                {
                    src:
                        "/src/images/carousel/bg-1.jpg"
                },
                {
                    src: "/src/images/carousel/bg-2.jpg"
                },
                {
                    src: "/src/images/carousel/bg-3.jpg"
                },
                {
                    src: "/src/images/carousel/bg-4.jpg"
                },
                {
                    src: "/src/images/carousel/bg-5.jpg"
                },
                {
                    src: "images/carousel/bg-6.jpg"
                }
            ]
        };
    },
    mounted() {
        console.log("mounted");
        this.$refs.videoPlayer.play();
    }
};
</script>

<style scoped></style>
