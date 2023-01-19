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
                <div class="iframe-container mx-auto rounded-lg" elevation="12">
                    <iframe class="rounded-lg"
                            src="https://drive.google.com/file/d/1bklOWtT6JhymJV5vReg9z9EMCx17EXzq/preview"
                            style="border: 0px; display: block;"
                            allowfullscreen=""
                            loading="lazy">
                    </iframe>
                </div>

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

};
</script>

<style scoped>
.iframe-container iframe {
    border: 0;
    height: calc(100vh - 100px);
    width: 100%;
    margin-right: auto !important;
    margin-left: auto !important;
}
</style>
