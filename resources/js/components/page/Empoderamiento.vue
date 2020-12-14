<template>
    <div style="min-height:70vh">
        <section>
            <v-img
                height="350"
                gradient="to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)"
                :src="require('@/images/header/empoderamiento.jpg')"
            >
                <v-row
                    class="fill-height text-center align-center justify-center"
                >
                    <v-col cols="12">
                        <h1
                            class="display-2 font-weight-500 mb-2 text-center white--text"
                        >
                            Empoderamiento
                        </h1>
                        <v-breadcrumbs
                            dark
                            color="white"
                            class="justify-center white--text"
                            :items="links"
                        ></v-breadcrumbs>
                    </v-col>
                </v-row>
            </v-img>
        </section>

        <section>
            <v-container>
                <v-card class="pa-0" color="black">
                    <video
                        ref="videoPlayer"
                        autoplay
                        controls
                        class="mb-0 pb-0"
                    >
                        <source
                            src="videos/Jenis Sagbini con imagenes.mp4"
                            type="video/mp4"
                        />
                    </video>
                </v-card>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    text: "Inicio",
                    disabled: false,
                    href: "/"
                },
                {
                    text: "Empoderamiento",
                    disabled: true,
                    href: "/empoderamiento"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
