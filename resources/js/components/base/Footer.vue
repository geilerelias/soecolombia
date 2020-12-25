<template>
    <section class="grey darken-4 white--text">
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="6">
                        <img
                            alt="John"
                            class="img-flotante"
                            contain
                            height="300"
                            src="@/images/Identificador-blanco.png"
                            style="float: left;float: left;
                                    margin-right: -80px;
                                    margin-top: -30px;"
                        />
                        <div class="mt-5">
                            <h3
                                class="text-uppercase title font-weight-bold mb-1 text-left white--text"
                            >
                                soy empoderamiento
                            </h3>
                            <p
                                class="base-body body-1 grey--text text--lighten-1 text-left mb-10 text-justify"
                            >
                                Nos inspira el saber de las mujeres, estamos
                                comprometidos con su auto-valoración. Conferimos
                                pasión en el empoderamiento de cada mujer, con
                                objetividad y claridad. La travesía personal de
                                cada uno de los integrantes de este equipo
                                refleja una combinación de saberes cotidianos,
                                profesionales y sociales, inspirados en la
                                necesidad de despertar conciencias de mujeres.
                            </p>
                        </div>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                        <h3
                            class="text-uppercase title font-weight-bold mb-1 text-left white--text"
                        >
                            Servicios
                        </h3>
                        <v-divider
                            class="primary mr-auto mb-4"
                            style="max-width: 35px; border: 2px solid;"
                        ></v-divider>


                        <v-list class="transparent " dark dense shaped>
                            <v-list-item-group
                                color="primary"
                            >
                                <v-list-item
                                    v-for="(item, i) in servicios"
                                    :key="i"
                                    :href="item.to"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            class="base-body body-1 mx-auto grey--text text--lighten-1 text-left mb-0"
                                            v-text="item.text"
                                        ></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>

                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                        <h3
                            class="text-uppercase title font-weight-bold mb-1 text-left white--text"
                        >
                            Contacto

                        </h3>
                        <v-divider
                            class="primary mr-auto mb-6"
                            style="max-width: 35px; border: 2px solid;"
                        ></v-divider>
                        <div
                            v-for="item in contact"
                            :key="item.name"
                            class="pt-2 mb-0 d-flex justify-start align-content-start align-start"
                        >
                            <div
                                class="base-avatar d-inline-flex mb-3 "
                                style="margin-left:-10"
                            >
                                <v-icon
                                    class="mt-6"
                                    dark
                                    size="32"
                                    v-text="item.icon"
                                />
                            </div>
                            <div class="ml-3">
                                <h3
                                    class="text-uppercase subtitle-2 mb-1 text-left white--text"
                                >
                                    {{ item.name }}
                                </h3>
                                <div
                                    class="base-body body-1 mx-auto grey--text text--lighten-1 text-left mb-0"
                                >
                                    <p v-html="item.content"></p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer class="white" padless>
            <v-container class="my-0 py-0" fluid>
                <v-row class="my-0">
                    <v-col class=" py-1" cols="12" md="6">
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            color="primary"
                            icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col
                        :class="
                            $vuetify.breakpoint.smAndDown
                                ? 'justify-center '
                                : 'justify-end '
                        "
                        class="d-flex align-center primary--text  py-1"
                        cols="12"
                        md="6"
                    >
                        Copyright © 2019 -
                        {{ new Date().getFullYear() }} SOE colombia
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </section>
</template>

<script>
export default {
    data: () => ({
        links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
        icons: [
            "mdi-facebook",
            "mdi-twitter",
            "mdi-google-plus",
            "mdi-linkedin",
            "mdi-instagram"
        ],

        contact: [
            {
                icon: "mdi-map-marker-outline",
                name: "Dirección",
                content: `Cra 4-A # 54-52<br />Chapinero Alto, Bogotá, Colombia`
            },
            {
                icon: "mdi-cellphone",
                name: "Teléfonos",
                content: `+57 315 734 0385 <br/> +57 300 290 0321`
            },
            {
                icon: "mdi-email",
                name: "Correos",
                content: `contacto@soecolombia.com <br /> contacto@jenissagbini.com`
            }
        ],
        servicios: [
            {text: "Capacitación", to: '/servicios#capacitacion', icon: "mdi-teach"},
            {text: "Asesorías", to: '/servicios#asesorias', icon: "mdi-face-agent"},
            {text: "Investigación", to: '/servicios#investigacion', icon: "mdi-book-search"},
            {text: "Círculos de poder", to: '/servicios#circulos-de-poder', icon: "mdi-account-group"},
            {text: "Coaching", to: '/servicios#coaching', icon: "mdi-account-tie"}
        ]
    })
};
</script>
<style lang="scss" scoped></style>
