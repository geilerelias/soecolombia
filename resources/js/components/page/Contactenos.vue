<template>
    <div class="mt-0">
        <section>
            <v-img
                :src="require('@/images/header/contacto.jpg')"
                gradient="to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)"
                height="350"
            >
                <v-row class="fill-height text-center align-center justify-center">
                    <v-col cols="12">
                        <h1
                            class="display-2 font-weight-500 mb-2 text-center white--text"
                        >
                            CONTÁCTENOS
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
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <h3
                        class="text-uppercase primary--text title font-weight-bold mb-1 text-left"
                    >
                        MANTENTE EN CONTACTO CON NOSOTROS
                    </h3>
                    <p
                        class="base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"
                    >
                        Si quieres saber mas de lo que hacemos y como podemos
                        ayudarte, no dudes en escribirnos a nuestros correos
                        electrónicos o llamar a cualquiera de los números
                        telefónicos que tenemos disponibles para ti. Para
                        nosotros es un placer poder servirte.
                    </p>

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
                                color="primary"
                                size="32"
                                v-text="item.icon"
                            />
                        </div>
                        <div class="ml-3">
                            <h3
                                class="text-uppercase font-weight-black subtitle-2 mb-1 text-left primary--text"
                            >
                                {{ item.name }}
                            </h3>
                            <div
                                class="base-body body-1 mx-auto  text--lighten-1 text-left mb-0"
                            >
                                <div v-html="item.content"></div>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <h3
                        class="text-uppercase title primary--text  font-weight-bold mb-1 text-left"
                    >
                        Envíanos un correo electrónico
                    </h3>

                    <v-form>
                        <div>
                            <div>
                                <v-text-field
                                    label="Nombre"
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    label="Correo"
                                    outlined
                                    small
                                    type="email"
                                ></v-text-field>

                                <v-text-field
                                    label="Tema"
                                    outlined
                                ></v-text-field>
                                <v-textarea
                                    label="Descripción o Mensaje"
                                    outlined
                                ></v-textarea>

                                <v-btn color="primary" dark outlined>
                                    Enviar
                                </v-btn>
                            </div>
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
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
                    text: "Contáctenos",
                    disabled: true,
                    href: "/contactenos"
                }
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
                    content: `contacto@mvictoriaaponte.com<br/>contacto@soecolombia.com <br /> contacto@jenissagbini.com`
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
