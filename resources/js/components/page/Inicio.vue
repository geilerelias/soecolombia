<template>
    <v-app>
        <v-carousel>
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
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src:
                        "images/carousel/bg-1.jpg"
                },
                {
                    src: "images/carousel/bg-2.jpg"
                },
                {
                    src: "images/carousel/bg-3.jpg"
                },
                {
                    src: "images/carousel/bg-4.jpg"
                },
                {
                    src: "images/carousel/bg-5.jpg"
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

<style lang="scss" scoped></style>
