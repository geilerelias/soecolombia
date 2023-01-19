<template>
    <app-layout>
        <section>
            <v-img
                height="350"
                gradient="to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)"
                src="/src/images/header/no-mas-violencia.jpg"
            >
                <v-row class="fill-height text-center align-center justify-center">
                    <v-col cols="12">
                        <h1
                            class="display-2 font-weight-500 mb-2 text-center white--text"
                        >
                            No más violencia
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

        <v-container>
            <p
                class="primary--text text-uppercase headline font-weight-bold my-2"
            >
                PRÁCTICAS SEXISTAS
            </p>

            <v-stepper v-model="e6" vertical non-linear>
                <div v-for="(comic, index) in comics" :key="index">
                    <v-stepper-step
                        :complete="e6 > 1"
                        :step="index + 1"
                        editable
                    >
                        {{ comic.title }}
                    </v-stepper-step>

                    <v-stepper-content :step="index + 1">
                        <v-container fluid class="grey lighten-2">
                            <v-card
                                elevation="24"
                                max-width="700"
                                class="mb-12 mx-auto"
                            >
                                <v-card-text>
                                    <v-img
                                        contain
                                        :src="comic.image"
                                        lazy-src="https://i.picsum.photos/id/300/10/6.jpg"
                                        :aspect-ratio="5 / 8"
                                    >
                                    </v-img>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        v-if="index !== 0"
                                        @click="e6 = index - 1"
                                    >
                                        <v-icon
                                        >mdi-skip-previous-outline
                                        </v-icon
                                        >
                                    </v-btn>
                                    <v-btn
                                        v-if="index < comics.length"
                                        color="primary"
                                        @click="e6 = index + 2"
                                    >
                                        <v-icon>mdi-skip-next-outline</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-container>
                    </v-stepper-content>
                </div>
            </v-stepper>
        </v-container>

        <v-container>
            <v-card tile>
                <v-window v-model="onboarding">
                    <v-window-item
                        v-for="(comic, index) in comics"
                        :key="index"
                    >
                        <v-toolbar>
                            <v-toolbar-title
                                class="primary--text font-weight-black"
                            >
                                {{ comic.title }}
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn text @click="prev">
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-btn text @click="next">
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-container class="grey lighten-2">
                            <v-card max-width="700" class=" mx-auto mt-4">
                                <v-card-text>
                                    <v-img
                                        contain
                                        :src="comic.image"
                                        :aspect-ratio="5 / 8"
                                    >
                                    </v-img>
                                </v-card-text>
                            </v-card>
                        </v-container>
                    </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-between">
                    <v-btn text @click="prev">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-sheet max-width="800" class="hidden-sm-and-down">
                        <v-slide-group
                            v-model="onboarding"
                            class="pa-4 text-center mx-auto"
                            :show-arrows="false"
                        >
                            <v-slide-item
                                v-for="(comic, n) in comics"
                                :key="n"
                                v-slot:default="{ active, toggle }"
                            >
                                <v-avatar
                                    :color="
                                        active ? 'primary' : 'grey lighten-1'
                                    "
                                    class="mx-1"
                                    width="75"
                                    height="100"
                                    @click="toggle"
                                    tile
                                >
                                    <v-scale-transition>
                                        <v-img
                                            contain
                                            :src="comic.image"
                                            alt="image"
                                            :gradient="
                                                active
                                                    ? 'to bottom, rgba(158, 67, 115, 0.48), rgba(158, 67, 115, 0.58)'
                                                    : ''
                                            "
                                        />
                                    </v-scale-transition>
                                </v-avatar>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>

                    <v-btn text @click="next">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>

        <v-container>
            <v-sheet class="mx-auto" elevation="8">
                <v-slide-group
                    v-model="model"
                    class="pa-4"
                    center-active
                    show-arrows
                >
                    <v-slide-item
                        v-for="comic in comics"
                        :key="comic.title"
                        v-slot:default="{ active, toggle }"
                    >
                        <v-card
                            class="ma-4"
                            height="450"
                            width="270"
                            @click="toggle"
                        >
                            <v-img
                                @click="viewModal(comic)"
                                :src="comic.image"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="400"
                            >
                                <v-card-title
                                    v-text="comic.title"
                                ></v-card-title>
                            </v-img>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn @click="viewModal(comic)" icon>
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </v-container>

        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title v-text="comic.title"></v-toolbar-title>
                </v-toolbar>
                <v-card elevation="0" max-width="700" class="mt-4 mx-auto">
                    <v-img :src="comic.image"></v-img>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-card>
        </v-dialog>

        <section id="sexismo">
            <v-container>
                <v-card elevation="12">
                    <div class="iframe-container mx-auto rounded-lg">
                        <iframe class="rounded-lg"
                                src="https://drive.google.com/file/d/1kGqwA0qo9LJa7Ba27amO0AlwhlBw4P1z/preview"
                                style="border: 0px; display: block;"
                                allowfullscreen=""
                                allow="autoplay"
                                loading="lazy">
                        </iframe>
                    </div>
                </v-card>
            </v-container>
        </section>

        <section id="testimonios" class="grey lighten-5 pt-6">
            <div class="base-section-heading text-center mb-0">
                <div class="d-inline-flex mb-4">
                    <v-avatar size="56" class="primary">
                        <v-icon dark>
                            mdi-chat-processing
                        </v-icon>
                    </v-avatar>
                </div>

                <h1
                    class="text-uppercase headline font-weight-bold mb-2 text-center"
                >
                    UN RELATO SOBRE VIVENCIAS GUARDADAS DE MUJERES
                </h1>
            </div>

            <v-container class="text-justify">
                <p>
                    Estos relatos, que a continuación presento, los llamé
                    “vivencias guardadas” y son fragmentos de historias de vida,
                    sobre el maltrato contra la mujer, y son referidas por
                    mujeres de diferentes regiones del país, ubicadas en la
                    ciudad de Bogotá, son producto de una compilación de
                    investigaciones que he realizado a lo largo de mi vida sobre
                    violencia de género.
                </p>

                <p>
                    En estos fragmentos de vivencias, me refiero especialmente a
                    esas experiencias que, en la vida de las mujeres, marcan un
                    recorrido de violencia, tal vez orientado por la
                    permisividad de manera consciente o inconsciente con que la
                    mujer acepta y permite el maltrato.
                </p>

                <p>
                    A medida que las mujeres, avanzaban en sus relatos, me
                    apasionaba cada vez más el tema y me conmovían
                    profundamente. No sólo era registrar hechos aislados y datos
                    sueltos, sino captar lo que ellas lograban transmitirme con
                    su lenguaje corporal, sus sonrisas, sus miradas, su llanto,
                    sus gestos, sus experiencias y emociones.
                </p>

                <p>
                    Es así como este conjunto de momentos mágicos, se
                    convirtieron en el entorno que me permitió un acercamiento,
                    y una complicidad suficiente, para armar un clima de
                    confianza y ayuda mutua que permitiera la fluidez en las
                    entrevistas.
                </p>
                <p>
                    Por esa razón, culminar con la interpretación de estos
                    relatos, fue un desafío y decidí mostrar el producto de
                    estas indagaciones a través de fragmentos de historia de
                    vida de mujeres, para devolvérselas bajo la forma de
                    cuestionamientos que las enriqueciera.
                </p>

                <p>
                    Todo esto, fue emocionante, y me permitió realizar una
                    travesía de realidades comunes con las mujeres, donde ellas
                    elegían palabras, e imágenes para expresarse, dando cuenta
                    de la representación que hacían de sí mismas, y la forma
                    como iba desentrañando el significado de sus vivencias, esas
                    que llevaban guardadas, que traían ocultas, y que dejaron
                    huellas imborrables en sus recuerdos.
                </p>

                <ol>
                    <li class="primary--text subtitle-1 font-weight-black">
                        <p>
                            VIVENCIAS GUARDADAS: CICATRICES IMBORRABLES.
                        </p>

                        <div
                            class="font-weight-medium black--text body-1 text-justify"
                        >
                            <p>
                                El fenómeno de la violencia contra las mujeres
                                no es reciente. Su estudio y los esfuerzos para
                                hacerla visible han hecho que se enuncie como un
                                problema de carácter social y se considere como
                                delito en algunos países del mundo.
                            </p>
                            <p>
                                Este trabajo representó un reto para mi logro
                                personal y profesional, porque implica mostrar
                                la cara oculta de la violencia intrafamiliar, lo
                                que las mujeres callamos de manera muy
                                consciente, porque es más fácil culpar a otros
                                de la desgracia propia, antes que cuestionarnos
                                nosotras mismas.
                            </p>
                            <p>
                                Es pertinente entender que el significado de
                                violencia apunta a las características sociales,
                                corporales y subjetivas, Berger y Luckman, 1999,
                                manifiesta que el significado es determinado por
                                su carácter temporal y contextual
                            </p>

                            <!-- wp:paragraph -->
                            <p>
                                Este trabajo representó un reto para mi logro
                                personal y profesional, porque implica mostrar
                                la cara oculta de la violencia intrafamiliar, lo
                                que las mujeres callamos de manera muy
                                consciente, porque es más fácil culpar a otros
                                de la desgracia propia, antes que cuestionarnos
                                nosotras mismas.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Es pertinente entender que el significado de
                                violencia apunta a las características sociales,
                                corporales y subjetivas, Berger y Luckman, 1999,
                                manifiesta que el significado es determinado por
                                su carácter temporal y contextual
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Es cierto que alrededor de las mujeres se tejen
                                vínculos de solidaridad que pueden ser
                                aprovechados para enfrentar situaciones de
                                malestar, y son estas experiencias y modos de
                                vida lo que las identifica y las hace
                                diferentes, y es significativo, retomarlo desde
                                las memorias.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                “Decidí trabajar sobre violencia de género,
                                documentando los recuerdos de maltrato a lo
                                largo de la vida de las mujeres”. La decisión de
                                trabajar con violencia contra las mujeres, surge
                                porque este flagelo afecta todos los ciclos de
                                la vida, partiendo desde la niñez, y
                                adolescencia, hasta la adultez y la tercera
                                edad, con el fin de poder identificar los tipos
                                de violencia que ellas han experimentado durante
                                toda su vida.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Lo anterior responde al hecho de que existen
                                problemas estructurales del sistema patriarcal,
                                en el que las mujeres se encuentran en una
                                posición inferior frente al hombre.
                                Manifestaciones culturales como la música, son
                                determinantes en la replicación de violencia de
                                género, expresiones directamente relacionadas
                                con violencia simbólica, donde el flagelo se
                                camufla y es socialmente aceptado y normalizado.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Según la OMS, 2018, la violencia de género,
                                adopta formas tales como la violencia física,
                                psicológica, sexual o y económica dentro del
                                hogar; violaciones; trata de mujeres y niñas;
                                prostitución forzada; violencia por los grupos
                                armados al margen de la ley, asesinatos,
                                violaciones sistemáticas, esclavitud sexual y
                                embarazo forzado; los asesinatos por razones de
                                honor; la violencia por causa de la dote.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                De igual manera, el infanticidio femenino y la
                                selección prenatal del sexo del feto en favor de
                                bebés masculinos; la mutilación genital
                                femenina; el impacto desproporcionado del
                                desplazamiento forzado en las mujeres y otras
                                prácticas y tradiciones perjudiciales
                                (Presidencia de la República, 2013). “Los
                                significados de cada una de sus experiencias
                                aluden a la representación mental y la manera de
                                apropiación de esos recuerdos”, fui testigo de
                                desgarradoras anécdotas, donde algunas,
                                expusieron el rechazo de sus padres desde que
                                nacieron, tan sólo por el simple hecho de haber
                                nacido mujeres, motivo por el cual, en lugar de
                                educación solo recibieron maltrato.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                En el relato de estas experiencias Jelin, 2001,
                                me aclaró que valerse de la memoria, involucra
                                referirse a recuerdos y olvidos, narrativas y
                                actos, silencios y gestos, saberes y emociones;
                                pero también huecos y fracturas.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                El común denominador fue la violencia
                                intrafamiliar, estas mujeres, en sus relatos
                                narraron la abnegación y entrega a su hogar,
                                dedicándose a cuidar a sus hijos y esposos,
                                figura que en muchas ocasiones resultaba ser el
                                principal victimario. Es importante aclarar que
                                la violencia, en las relaciones sociales y
                                particularmente dentro de la familia, se
                                convierte en unos de los obstáculos más serios
                                para el crecimiento de las personas, deteriora
                                la calidad de vida y genera muertes evitables.
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                La violencia intrafamiliar, explica el maltrato
                                hacia la mujer en el ámbito familiar, y en
                                particular la que es ejercida por el hombre con
                                quien convive--su marido o compañero--, o la que
                                es ejercida desde fuera de la familia por el
                                hombre con quien ha convivido, o con quien
                                mantiene una relación de pareja (Ferreira,
                                1995).&nbsp;
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Se tipifican los tipos de maltrato a la mujer ya
                                que no solo de manera física se maltrata a una
                                mujer, también psicológicamente cuando se ejerce
                                poder sobre ella, sobre sus acciones o sobre lo
                                que piensa. Se le condiciona o se invalida
                                haciéndola sentir menos, desde la dependencia
                                económica, el chantaje y amenazas, como también
                                el maltrato verbal, esto hace que la mujer
                                soporte el maltrato por miedo.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Para aclarar estas apreciaciones, Perela 2.014,
                                muestra que la violencia psicológica, es la que
                                causa daño emocional y disminución de la
                                autoestima o perjudica y perturba el pleno
                                desarrollo personal o que busca degradar o
                                controlar sus acciones, comportamientos,
                                creencias y decisiones, mediante amenaza, acoso,
                                hostigamiento, restricción, humillación,
                                deshonra, descrédito, manipulación o
                                aislamiento.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                También contribuye con este deterioro, la
                                violencia Física, porque incluye cualquier acto
                                de fuerza contra el cuerpo de la mujer, con
                                resultado o riesgo de producir lesión física o
                                daño (Carrasco, 2014). De igual manera, la
                                violencia económica, es definida como cualquier
                                acción u omisión orientada al abuso económico,
                                el control abusivo de las finanzas, recompensas
                                o castigos monetarios a las mujeres por razón de
                                su condición social, económica o política
                                (Ministerio de Protección Social, Ley 1257 de
                                2008).
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Teniendo en cuenta lo anterior, es de destacar
                                que además de compartir tipos de violencia, las
                                mujeres también tienen en común que están
                                sometidas a la dominación genérica y de clase,
                                lo que aumenta la percepción hostil y el
                                significado que tienen sobre la realidad, porque
                                la consideran amenazante, creen que es una
                                conducta socialmente anómala, a la cual están
                                expuestas en su casa y fuera de ella.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Moliner, 2007, me explicó que ellas comparten
                                como género la misma condición histórica,
                                comenta que la memoria, en tanto es una
                                «facultad psíquica con la que se recuerda» o la
                                «capacidad, mayor o menor, para recordar» y que
                                el recordar permite a los seres humanos
                                reconstruir las historias vividas y, de acuerdo
                                a cada contexto (cultura) dotarlas de
                                significado. &nbsp;
                            </p>
                            <!-- /wp:paragraph -->
                        </div>
                    </li>
                    <li class="primary--text subtitle-1 font-weight-black">
                        <p>
                            USTIFICANDO LA REALIDAD ESTUDIADA
                        </p>

                        <div
                            class="font-weight-medium black--text body-1 text-justify"
                        >
                            <!-- wp:paragraph -->
                            <p>
                                La violencia contra la mujer es un fenómeno muy
                                complejo, sobre todo porque no es correctamente
                                identificado por toda la población y su
                                reconocimiento, sería la primera dificultad que
                                se debe vencer para poder enfrentarlo con la
                                emergencia necesaria,
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                De igual manera esta investigación, es relevante
                                para las mujeres colombianas, debido a que
                                genera aportes para el avance de ellas, en temas
                                de crecimiento personal, porque muestran
                                vivencias que se constituyen en aportes para el
                                manejo de problemáticas similares que estén
                                experimentando otras mujeres en el espacio de su
                                vida cotidiana
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Este estudio aporta desde lo práctico el espacio
                                que se necesita para despertar la conciencia de
                                la mujer a nivel individual y colectivo para
                                poder detectar la violencia y detenerla a
                                tiempo.
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Se busca generar en otras mujeres, el deseo de
                                que también ellas cuenten su historia de vida,
                                como un espacio de resiliencia y despierte en
                                ellas el deseo de no repetición de episodios de
                                violencia en sus vidas, buscando sanación que
                                repercuta en una buena salud mental para ella.
                                &nbsp;
                            </p>
                            <!-- /wp:paragraph -->

                            <!-- wp:paragraph -->
                            <p>
                                Así mismo, esto redundará, no solo en el
                                beneficio de la mujer, sino también de las
                                personas que hacen parte del núcleo familiar,
                                buscando la convivencia armónica y que todos los
                                miembros de la familia, realicen acciones que
                                permita la legitimación de los derechos de la
                                mujer, y la toma de decisiones autónomas para su
                                proyecto de vida, logrando el empoderamiento
                                femenino.
                            </p>
                            <!-- /wp:paragraph -->
                        </div>
                    </li>
                    <li class="primary--text subtitle-1 font-weight-black">
                        <p>
                            SIGNIFICADO DE LA EXPERIENCIA
                        </p>

                        <div
                            class="font-weight-medium black--text body-1 text-justify"
                        >
                        </div>
                    </li>
                </ol>
            </v-container>
        </section>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
    components: {AppLayout},
    data() {
        return {
            links: [
                {
                    text: "Inicio",
                    disabled: false,
                    href: "/"
                },
                {
                    text: "No más violencia",
                    disabled: true,
                    href: "/no-mas-violencia"
                }
            ],
            onboarding: 0,
            model: null,
            e6: 1,
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            comic: {
                title: "",
                image: ""
            },
            comics: [
                {
                    title: "Un día de tu rutina",
                    image: "/src/images/comics/caricaturas_001.png"
                },
                {
                    title: "Contradicciones y frustraciones",
                    image: "/src/images/comics/caricaturas_002.png"
                },
                {
                    title: "Y el desarrollo de la mujer ?…….Qué ?",
                    image: "/src/images/comics/caricaturas_003.png"
                },
                {
                    title: "Y la reivindicación de tus derechos ?… Qué ?",
                    image: "/src/images/comics/caricaturas_004.png"
                },
                {
                    title:
                        "Y la visibilización de la mujer en lo público ? …Qué ?",
                    image: "/src/images/comics/caricaturas_005.png"
                },
                {
                    title: "Así fué la historia de tu vida !!",
                    image: "/src/images/comics/caricaturas_006.png"
                }
            ]
        };
    },
    methods: {
        viewModal(comic) {
            this.comic = comic;
            this.dialog = true;
        },
        next() {
            this.onboarding =
                this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
        },
        prev() {
            this.onboarding =
                this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
        }
    }
};
</script>

<style scoped></style>
