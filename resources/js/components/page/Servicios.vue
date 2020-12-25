<template>
    <div style="min-height:70vh">
        <section>
            <v-img
                    height="350"
                    gradient="to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)"
                    :src="require('@/images/header/servicios.jpg')"
                >
                    <v-row class="fill-height text-center align-center justify-center">
                        <v-col cols="12">
                            <h1
                                class="display-2 font-weight-500 mb-2 text-center white--text"
                            >
                                Servicios
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

        <section id="services" class="py-5">
            <div class="base-section-heading text-center my-12">
                <v-avatar size="56" class="primary mb-4">
                    <v-icon dark size="28">
                        mdi-face-agent
                    </v-icon>
                </v-avatar>
                <h1
                    class="text-uppercase headline font-weight-bold mb-2 text-center"
                >
                    Servicios ofrecidos
                </h1>
                <v-divider
                    class="primary mx-auto mb-6 "
                    style="max-width:28px"
                ></v-divider>
            </div>
            <v-container>
                <v-row class="mb-5 align-center" v-for="(item,i) in services" :key="i" :id="item.id">
                    <v-col class="col-md-4 col-12" :class="i%2==0?'order-md-2':''">
                        <v-card outlined>
                            <v-img :src="item.image"
                                   style="height: 250px;"></v-img>
                        </v-card>
                    </v-col>

                    <v-col class="px-0 col-md-8 col-12">
                        <v-card flat class="transparent">
                            <v-card-title>{{item.title}}</v-card-title>

                                <v-card-text  class="overflow-y-auto" style="height: 250px;">
                                    <perfect-scrollbar v-html="item.content">
                                    </perfect-scrollbar>
                                </v-card-text>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>

</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    text: 'Inicio',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Servicios',
                    disabled: true,
                    href: '/services',
                },
            ],
            cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            ],
            services: [
                {
                    id:'capacitacion',
                    image: 'images/servicios/capacitacion 2.jpg',
                    title: 'CAPACITACIÓN',
                    content: 'Son acciones educativas de carácter no formal, que incluye mensajes inspiradores que tienen un alto contenido de motivación para favorecer el empoderamiento de las mujeres, buscando el recorrido de un camino que genera enseñanzas plenas de ambiciones para mujeres mostrando el manejo de emociones y saberes que conduzcan al conocimiento de si mismas, y fortalezcan su autoestima y autovaloración para el logro de sueños.<br>' +
                        '<br>' +
                        'Ejes temáticos: <br>' +
                        '<br>' +
                        '•\tEstereotipos culturales e identidad femenina<br>' +
                        '•\tPrácticas sexistas y violencia de género<br>' +
                        '•\tEmprendimiento y necesidad de cambio de la mujer<br>' +
                        '•\tManejo de los miedos y las emociones<br>' +
                        '•\tAutovaloración femenina <br>' +
                        '•\tSentido de vida femenino<br>' +
                        '•\tSororidad, y círculos de poder<br>' +
                        '•\tPromoción de la salud<br>' +
                        '•\tDerechos de la mujer<br>' +
                        '•\tActividad física y ejercicios<br>' +
                        '•\tLiderazgo y motivación<br>' +
                        '•\tPersonalidad, imagen y autoimagen<br>' +
                        '•\tAdecuación de indumentaria y maquillaje básico<br>' +
                        '•\tElaboración de adornos con material Reciclable.<br>'
                },
                {
                    id:'asesorias',
                    image: 'images/servicios/accesorias 2.jpg',
                    title: 'ASESORÍAS',
                    content: 'Con el fin de que las mujeres vean la vida de otra manera, es necesario que obtengan un marco empírico, dado desde la revisión de estudios sobre el maltrato contra las mujeres y testimonios de mujeres que experimentan la problemática de la violencia de género, para que ellas aprendan a tomar decisiones, que propicien el entendimiento de su propósito existencial, con temas que empoderen a las mujeres, como el manejo de los miedos, y la lucha por lograr sus sueños, desde el recorrido de sus emociones, y la autovaloración. <br>' +
                        '<br>' +
                        'Estas acciones, serán desarrolladas desde la mediación de la estrategia metodológica virtual, consolidada a través del diseño y desarrollo de la página Web de SOE, con productos encaminados al empoderamiento femenino.<br>' +
                        '<br>' +
                        'Ejes temáticos:<br>' +
                        '<br>' +
                        '•\tEmpoderamiento femenino: motivación, liderazgo, estereotipos culturales, manejo de prácticas sexistas, elaboración de propuestas para creación de redes, o círculos de poder, etc..<br>' +
                        '•\tEmprendimiento de la mujer: iniciativas de negocios, propuestas creativas micro empresariales, manejo contable y de finanzas.<br>' +
                        '•\tAsesorías legales de la mujer: ejercicio y legitimación de derechos, políticas estatales, cuota alimentaria, protección de bienes. <br>' +
                        '•\tAsesorías psicológicas: personalidad, autoestima, autovaloración y armonía.<br>' +
                        '•\tPromoción de la salud y prevención de enfermedades: estilos de vida saludables, bienestar del cuerpo, de la mente y salud colectiva.<br>' +
                        '•\tAcondicionamiento físico: guías de ejercicios básicos, planes de entrenamiento físico, relajación y orientación nutricional.<br>' +
                        '•\tAsesoría de imagen: orientación en maquillaje básico, modas y peinados<br>' +
                        '•\tOrientación espiritual: crecimiento en el discernimiento de la palabra de Dios.<br>'
                },
                {
                    id:'investigacion',
                    image: 'images/servicios/investigacion 3.jpg',
                    title: 'INVESTIGACIÓN',
                    content: 'Se refiere a la actividad productora de nuevas ideas de las mujeres, teniendo como punto de partida, las indagaciones y exploraciones sobre la trayectoria de sus vivencias en todas las dimensiones de su ser, desde la infancia, la adolescencia, la juventud y la adultez. <br>' +
                        '<br>' +
                        'De igual manera para intervenir esta realidad, se requiere de estrategias valiosas, tales como:  los testimonios y las historias de vida de mujeres, que conjuntamente con la teoría, permiten la comprensión de sus problemas, para ahondar la vida cotidiana, sus miedos, sus sueños, las relaciones de pareja, las pautas de crianza de los hijos, los estereotipos culturales, las acciones comunitarias, y la diversidad cultural. <br>' +
                        '<br>' +
                        'Lo anterior, con el fin de conocer todo acerca de las relaciones entre los seres que hacen parte de la sociedad, para hacerle comprender a las mujeres que deben evitar desbordar sus pasiones, y saber manejar sus emociones. <br>'
                },
                {
                    id:'circulos-de-poder',
                    image: 'images/servicios/circulo-de-poder 2.jpg',
                    title: 'CÍRCULOS DE PODER',
                    content: 'Implica la incorporación de vínculos entre mujeres, buscando la sororidad y el manejo de la escucha, así como el valor de la interacción entre las mujeres, la búsqueda de la autovaloración y el reconocimiento entre ellas, es un disparador de intercambio de conocimientos y vivencias que genera aprendizaje. <br>' +
                        '<br>' +
                        'La interacción entre mujeres, incorpora la mirada que le devuelven las otras mujeres, porque el poder femenino le permite a la mujer mirarse a sí misma de otra manera, porque son afines en la misión existencial que como mujeres van incorporando a su esencia femenina y la autovaloración que van ganando conjuntamente, le permite reconocerse en la diferencia y valorarse. Además es importante ver en otras mujeres el modelo de valentía, de superación, de mujeres empoderadas. <br>'
                },
                {
                    id:'coaching',
                    image: 'images/servicios/cohaching 2.jpg',
                    title: 'COACHING',
                    content: 'Importa, la búsqueda de un estilo de vida saludable, la trascendencia de una vida que deje huellas fuera del hogar de la mujer, para buscar la transformación de la subordinación al protagonismo, permitiendo que sus actuaciones le den paso a la lógica, a lo razonable, donde articulen el pensar, el sentir y el actuar, con el fin de hacer aportes valiosos para la autovaloración femenina. <br>' +
                        'Es claro que podemos reinventarnos, y establecer nuevas rutas, que nos permita preguntarnos, <br>' +
                        '    <br>' +
                        'Implica preguntarse:<br>' +
                        '¿Cómo se hace una mujer? ¿Más aún cómo se hace una mujer para el mundo de hoy? ¿cómo podríamos generar en nuestras mentes la objetividad? ¿Cómo socializar, las notas inspiradoras que existen para aprender a conocernos?<br>' +
                        '¿Será que les puedo sugerir a las mujeres, acciones desde mis propias experiencias? ¿funcionará si les expreso que existen mil formas de aprender a entender los llamados de su feminidad?  será más práctico utilizar el arte de hablar con sutileza, para que ellas cuenten sus vivencias, interpretando su significado y dándole sentido a lo que han vivido?<br>'
                }]
        }),
    };
</script>

<style lang="scss" scoped>
    .ps {
        height: 200px;
    }
</style>
