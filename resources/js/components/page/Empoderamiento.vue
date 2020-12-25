<template>
    <div style="min-height:70vh">
        <section>
            <v-img
                :src="require('@/images/header/empoderamiento.jpg')"
                gradient="to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)"
                height="350"
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
                            :items="links"
                            class="justify-center white--text"
                            color="white"
                            dark
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
                        class="mb-0 pb-0"
                        controls
                    >
                        <source
                            src="videos/Jenis Sagbini con imagenes.mp4"
                            type="video/mp4"
                        />
                    </video>
                </v-card>
            </v-container>
        </section>


        <section id="testimonios" class="grey lighten-5" style="padding: 32px 0px;">
            <div class="base-section-heading text-center mb-0">
                <v-avatar class="d-inline-flex mb-4" color="primary" size="56">
                    <v-icon dark size="28">mdi-chat-processing</v-icon>
                </v-avatar>

                <h1 class="text-uppercase text-h5 font-weight-bold mb-2 text-center">
                    Testimonios
                </h1>
                <v-divider class="primary mx-auto mb-6" style="max-width: 28px;"></v-divider>
            </div>

            <v-window
                v-model="onboarding"
                show-arrows
            >
                <v-window-item
                    v-for="(item,n) in testimonios"
                    :key="`card-${n}`"
                >
                    <v-card
                        color="grey lighten-5"
                        flat
                        height="50vh"
                    >

                        <v-row
                            align="center"
                            class="fill-height"
                            justify="center"
                        >
                            <div>
                                <v-card
                                    class="secondary rounded-circle"
                                    height="40vh"
                                    width="40vh"
                                >
                                    <v-avatar height="40vh"
                                              width="40vh">
                                        <video
                                            class="mb-0 pb-0"
                                            controls
                                        >
                                            <source
                                                :src="item.src"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </v-avatar>
                                </v-card>
                                <h3 class="text-h6 font-weight-bold mb-0 text-center"> {{ item.name }} </h3>
                                <div class="text-body-2 font-weight-regular mb-0 text-center grey--text">
                                    {{ item.ocupation }}
                                </div>
                            </div>
                        </v-row>
                    </v-card>
                </v-window-item>
            </v-window>

            <v-card-actions class="justify-center grey">
                <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
                >
                    <v-item
                        v-for="(item, n) in testimonios"
                        :key="`btn-${n}`"
                        v-slot="{ active, toggle }"
                    >
                        <v-btn
                            :input-value="active"
                            icon
                            @click="toggle"
                        >
                            <v-icon>mdi-record</v-icon>
                        </v-btn>
                    </v-item>
                </v-item-group>
            </v-card-actions>

        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonios: [
                {
                    name: 'Ana',
                    ocupation: 'Estudiante',
                    src: '/videos/testimonios/ana.mp4'
                }, {
                    name: 'Angelica y Maria',
                    ocupation: 'Estudiantes',
                    src: '/videos/testimonios/angelica y maria.mp4'
                }, {
                    name: 'Carolai',
                    ocupation: 'Estudiante',
                    src: '/videos/testimonios/carolai.mp4'
                }, {
                    name: 'Juliana',
                    ocupation: 'Estudiante',
                    src: '/videos/testimonios/julliana.mp4'
                },
            ],
            onboarding: 0,
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
    },
    methods: {
        next() {
            this.onboarding = this.onboarding + 1 === this.length
                ? 0
                : this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0
                ? this.length - 1
                : this.onboarding - 1
        },
    }
};
</script>

<style lang="scss" scoped>

</style>
