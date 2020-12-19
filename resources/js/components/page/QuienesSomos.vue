<template>
    <v-app style="min-height:70vh">
        <section>
            <v-img
                :src="require('@/images/header/quienes-somos.jpg')"
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
                            ¿Quienes Somos?
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
                <v-col class="col-md-6 col-12">
                    <h2 class="mb-4 display-1">
                        Soy Empoderamiento.<br/>
                        SOE Colombia.
                    </h2>
                    <p class="subtitle-1 text-justify">
                        Nos inspira el saber de las mujeres, estamos
                        comprometidos con su auto-valoración. Conferimos pasión
                        en el empoderamiento de cada mujer, con objetividad y
                        claridad. La travesía personal de cada uno de los
                        integrantes de este equipo refleja una combinación de
                        saberes cotidianos, profesionales y sociales, inspirados
                        en la necesidad de despertar conciencias de mujeres.
                    </p>
                </v-col>
                <v-col class="col-md-5 offset-md-1 col-12">
                    <v-card>
                        <v-img
                            src="https://lanetaneta.b-cdn.net/wp-content/uploads/2020/02/Paramos-para-evidenciar-que-nuestros-aportes-tienen-un-impacto-abogada-780x467.jpg"
                        >
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <section class="primary lighten-1">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-card
                            class="white--text"
                            color="transparent"
                            elevation="0"
                            tile
                        >
                            <v-card-title primary-title>
                                MISIÓN
                            </v-card-title>
                            <v-card-text class="white--text">
                                <p class="text-justify">
                                    Soy empoderamiento (SOE), implica el uso de
                                    medios publicitarios virtuales (canal y
                                    blog) que desmitifiquen prácticas sociales
                                    repetitivas de sometimiento de un género
                                    sobre el otro, para ser remplazadas por
                                    prácticas culturales democráticas y
                                    equitativas, entre hombres y mujeres.
                                    Nuestra misión es desarrollar iniciativas de
                                    investigación, reflexiones y acciones de
                                    capacitación desde la autoestima,
                                    autovaloración y la conciencia; para que las
                                    mujeres con discernimiento, evidencien
                                    aclaraciones a las controversias sobre su
                                    papel en la vida cotidiana, erradicando las
                                    creencias limitantes que las condicionan y
                                    les impide tomar el control de sus vidas.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card
                            class="white--text"
                            color="transparent"
                            elevation="0"
                            tile
                        >
                            <v-card-title primary-title>
                                VISIÓN
                            </v-card-title>
                            <v-card-text class="white--text">
                                <p class="text-justify">
                                    El posicionamiento de SOE se dimensiona en 5
                                    años, como el canal y el blog en el ámbito
                                    nacional e internacional ampliado en una
                                    red, que totalice y despliegue el
                                    empoderamiento femenino, asesorando,
                                    asistiendo y acompañando a mujeres en
                                    acciones personales, familiares y
                                    comunitarias, desde la autonomía y toma de
                                    decisiones que apunten al despertar de su
                                    conciencia en el ámbito de la vida
                                    cotidiana.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <br/>
        <v-container>
            <div class="text-center">
                <v-avatar color="secondary lighten-2" size="65">
                    <v-avatar color="primary" dark size="56">
                        <v-icon dark>mdi-account-group</v-icon>
                    </v-avatar>
                </v-avatar>
                <br/>
                <p class="primary--text headline font-weight-black">
                    Grupo de Apoyo
                </p>
                <p
                    class="base-body body-1 mx-auto grey--text text--darken-1 text-center mb-10"
                    style="max-width: 700px;"
                >
                    Somos un equipo de profesionales que facilitamos la promoción al diálogo y a la reflexión entre
                    mujeres. Propiciamos espacios idóneos para empoderar a la mujer construyendo un mejor futuro.
                </p>
            </div>
        </v-container>

        <!--     equipo-->
        <v-container grid-list-xl>

            <div class="layout justify-center wrap">
                <div
                    v-for="(item, index) in group"
                    :key="index"
                    class="flex xs12 sm6 md4 lg3"
                >
                    <v-hover v-slot:default="{ hover }">
                        <div>
                            <v-card
                                class="mx-auto" color="grey lighten-4"
                                height="350"
                                width="250"
                            >
                                <v-img :src="item.img" height="350" width="250">
                                    <v-expand-transition>
                                        <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal  white--text"
                                            style="height: 100%;"
                                        >
                                            <v-container
                                                class="body-2 primary darken-4"
                                                style="height:400px "

                                            >
                                                <perfect-scrollbar>
                                                    <p class="pa-6 text-justify" v-html="item.description"></p>
                                                </perfect-scrollbar>
                                            </v-container>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-card>
                            <v-card class="mx-auto" flat
                                    width="250">
                                <h3 class="title font-weight-black primary--text mb-2">
                                    {{ item.name }}
                                </h3>
                                <div class="font-weight-light subtitle-2 mb-2">
                                    {{ item.profession }}<br/>
                                </div>
                                <p
                                    class="base-body body-1 mx-auto grey--text text--darken-1 text-justify mb-10"
                                    style="max-width: 700px;"
                                    v-html="item.others"
                                ></p>

                            </v-card>
                        </div>
                    </v-hover>

                </div>
            </div>
        </v-container>

        <!--  <div class="layout justify-center wrap">
            <div
                class="flex xs12 sm6 md4"
                v-for="(item, index) in group"
                :key="index"
            >
                <div class="mb-4 text-center member">
                    <v-hover v-slot:default="{ hover }">
                        <v-avatar
                            color="primary"
                            class="elevation-4"
                            style="
                                        height: 164px;
                                        min-width: 164px;
                                        width: 164px;
                                    "
                        >
                            <v-img :src="item.img" alt="John">
                                <v-expand-transition>
                                    <div
                                        v-if="hover"
                                        class="d-flex transition-fast-in-fast-out primary v-card--reveal headline white--text"
                                        style="height: 100%;"
                                    >
                                        <v-container>
                                            <p class="subtitle-2 text-center">
                                                {{ item.profession }}
                                            </p>
                                        </v-container>
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-avatar>
                    </v-hover>
                    <p
                        class="font-weight-light subtitle-1 primary--text justify-text text-center"
                    >
                        {{ item.name }}
                    </p>
                </div>
            </div>
        </div> -->

        <v-container>
            <video ref="videoPlayer" autoplay class="mb-0 pb-0" controls>
                <source
                    src="videos/Video 9. Papel de la mujer en la sociedad.mp4"
                    type="video/mp4"
                />
            </video>
        </v-container>
    </v-app>
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
                    text: "¿Quienes Somos?",
                    disabled: true,
                    href: "/quienes-somos"
                }
            ],
            group: [
                {
                    img: "images/group/MARÍA VICTORIA APONTE VALVERDE.png",
                    name: "MARÍA VICTORIA APONTE VALVERDE",
                    email: "marivictoriap@hotmail.com",
                    profession: "TRABAJADORA SOCIAL",
                    others: `Magister en Investigación Social<br/>
                    Especialista en Administración y docencia universitaria
                    `,
                    description: `Me he desempeñado, desde lo social como profesional universitario,
                    en oficinas de la mujer a nivel municipal y como personal directivo en el orden departamental.
                    De igual manera, me desempeñé, cómo directora de Bienestar Universitario. Así mismo, fui directora de
                    la Asociación de Trabajadores Sociales del Cesar y directora de una Fundación sin ánimo de lucro que
                    trabajaba por los jóvenes. Actualmente soy Docente universitaria. Mi trayectoria profesional, se ha
                    caracterizado por investigar problemáticas de la mujer, y la violencia de género,
                    la recuperación de la memoria entre otros, con el ánimo de ser referente de
                    cambio para las mujeres a través de un diálogo de saberes que permita
                    transformarla de la subordinación al protagonismo en el contexto
                    socio-cultural.`
                },
                {
                    img: "images/group/JENIS DEL CARMEN SAGBINI ECHAVEZ.jpg",
                    name: "JENIS DEL CARMEN SAGBINI ECHÁVEZ",
                    profession: "INGENIERA DE SISTEMAS",
                    others: `Magíster en Marketing & Dirección Comercial<br/>
                    Magíster en Gobierno de TI`,
                    description: `
                    Ingeniera de Sistemas con MSc en Marketing y Dirección Comercial y con MSc en Gobierno de Tecnologías de la Información. <br/>
                    Con amplia experiencia en Estrategias comerciales, manejo del recurso humano y capacitación. <br/>
                    Docente Universitaria, Investigadora, Asesora Tecnológica y Conferencista Internacional.`
                },
                {
                    img: "images/group/RODRIGO ALBERTO TABORDA APONTE.png",
                    name: "RODRIGO ALBERTO TABORDA APONTE",
                    email: "rodrigotaborda@hotmail.com",
                    profession: "ABOGADO",
                    others: `Especialista en derecho procesal
                    Magister en planificación territorial`,
                    description: `Profesional en Derecho, especializado en derecho procesal.
                    Magister en planificación territorial, atento para servir a la comunidad.
                    Con competencias teóricas, prácticas, argumentativas, propositivas,
                    así como con la adecuada fundamentación investigativa, que me permita en un
                    marco ético y de valores, comprometerme con la dignidad humana y con la
                    sociedad en el logro de la justicia material, del garantismo y protección de
                    los derechos fundamentales de los ciudadanos. Me destaco por establecer relaciones
                    laborales caracterizadas por la empatía y la resolución proactivas de conflictos.`
                },
                {
                    img: "images/group/VICTOR MAURICIO TABORDA APONTE.png",
                    name: "VICTOR MAURICIO TABORDA APONTE",
                    email: "vmaoht@hotmail.com",
                    profession: "MÉDICO Y CIRUJANO",
                    others: `Especialista en Pediatría`,
                    description: `Profesional en Medicina, especialista altamente competente
                    el área de Pediatría con un amplio compromiso, y entendimiento de las
                    necesidades de la sociedad. Conservo una ética profesional para el buen
                    desempeño de esta especialización, que me permite involucrarme en la atención
                    de la población pediátrica fomentando un cuidado integral de la salud, mediante
                    la promoción, prevención y rehabilitación del niño dentro de los estándares de la
                    más alta calidad. Con especial cuidado, pongo todo mi empeño en lo que hago, atento
                    para servir a la comunidad. A partir del desempeño de las labores relacionadas
                    anteriormente, he desarrollado habilidades y destrezas para actuar en espacios con
                    apertura al conocimiento interdisciplinario.`
                },
                {
                    img: "images/group/CRISTIAN ALEXANDER TABORDA APONTE.png",
                    name: "CRISTIAN ALEXANDER TABORDA APONTE  ",
                    email: "cristian_tabo5@hotmail.com",
                    profession:
                        "PROFESIONAL EN CULTURA FÍSICA DEPORTE Y RECREACIÓN ",
                    others: `Especialista en Programación y evaluación del ejercicio`,
                    description: `Profesional en cultura física deporte y recreación, habilidades de
                    manejo de grupo de los diferentes ciclos académicos, con clases dinámicas y creativas,
                    comprometido con el aprendizaje y progreso de los usuarios y búsqueda continua para
                    desarrollar habilidades básicas como el trabajo en equipo, autonomía, responsabilidad
                    y habilidades físicas como resistencia fuerza, velocidad etc.  Disposición oportuna
                    y eficaz para realización de tareas al cargo, con una actitud respetuosa de los valores
                    éticos, morales sociales e institucionales.  Profesional competente para la formulación,
                    administración y ejecución de planes, programas, proyectos de actividad física, deporte y
                    recreación, que promuevan la salud (bienestar y calidad de vida) de las personas en
                    ámbitos organizacionales públicos y privados, con actitud crítica, ética,
                    responsabilidad social y ambiental.`
                },
                {
                    img: "images/group/RODRIGO ALBERTO TABORDA JUNCO.png",
                    name: "RODRIGO ALBERTO TABORDA JUNCO",
                    email: "rtabordajunco@gmail.com",
                    profession:
                        "MÉDICO ESPECIALISTA MEDICINA INTERNA Y GASTROENTEROLOGÍA",
                    others: ``,
                    description: `Médico especialista en Gastroenterología, y Medicina Interna,
                    atento para servir a la comunidad. Con capacidad para diseñar, planear y desarrollar
                    programas orientados a la prevención y promoción de la salud, específicamente diagnóstico
                    y tratamiento de enfermedades gastrointestinales, y hepáticas. Es de destacar que como
                    internista evito la atomización en el cuidado del enfermo, brindando un cuidado integral
                    a adolescentes, adultos y ancianos, con base en una formación científica y humanística,
                    con alta precisión diagnóstica, actualizado, con criterio estricto y gran prudencia de los
                    medios diagnósticos de los cuales se dispone en la actualidad.`
                },
                {
                    img:
                        "images/group/Alexandra Aponte Sagbini.jpg",
                    name: "Alexandra Aponte Sagbini",
                    email: "alexandraapontesagbini@hotmail.com",
                    profession: "Psicóloga",
                    others: `Especialista en Negocios Internacionales. Investigadora.`,
                    description: `Psicóloga, Especialista en Negocios Internacionales. Investigadora. Amplia experiencia en Comunicaciones, Relaciones Internacionales, Negociación y manejo del Talento Humano.`
                },
                {
                    img: "images/group/ANGELA MARÍA BICENTY MENDOZA.png",
                    name: "ANGELA MARÍA BICENTY MENDOZA",
                    email: "anyela64@hotmail.com",
                    profession: "ODONTÓLOGA",
                    others: `Magister en Salud Pública y desarrollo.
                    Especialista en Gerencia Social de la Educación.
                    `,
                    description: `Mi Experiencia profesional se ha desarrollado en actividades
                    de docencia e investigación en pregrado y postgrado en el área de las ciencias
                    de salud Oral y Clínica., como docente de laboratorio de preclínica en el área
                    rehabilitación oral y espacios académicos relacionados con el área de investigación,
                    al igual he desarrollado competencias en el asesoramiento de proyectos de grado,
                    semilleros de investigación en asesoría metodológica. Con capacidad para diseñar,
                    planear y desarrollar programas orientados a la Prevención y promoción de la salud
                    y prevención diagnóstico y tratamiento de enfermedades bucodentales a nivel
                    individual, familiar y de la comunidad. `
                },
                {
                    img:
                        "images/group/JOSE ANTONIO APONTE Y ADRIANA BLANCO.png",
                    name: "JOSE ANTONIO APONTE Y ADRIANA BLANCO",
                    email: "sicarare@hotmail.com",
                    profession: "SENTIDO PROFUNDO DE LA ORIENTACIÓN ESPIRITUAL",
                    others: ``,
                    description: `Como orientadores de la fe, antes de ejercer nuestra misión
                    y en su ejercicio, tenemos claro el sentido profundo de la misma, es decir,
                    la meta o el horizonte hacia donde deben encaminarse las personas, la cual es:
                    el seguimiento de Jesús. La asesoría, en tanto que pedagogía de fe cristiana,
                    tiene como objeto esencial la formación de discípulos de Jesucristo, hombres y
                    mujeres adultos en la fe, personas que van configurando de forma responsable el
                    sentido de sus vidas y la orientación de su misión según el eje estructurador del
                    seguimiento de Jesús. En este sentido, la asesoría es una pedagogía Cristo céntrica:
                    busca hacer de Jesucristo el centro de la vida de las personas y de las comunidades.`
                },
                {
                    img:
                        "images/group/Carmen Adriana Blanco Niño.jpg",
                    name: "Carmen Adriana Blanco Niño",
                    email: "yayablanco@gmail.com",
                    profession: "Abogada",
                    others: `especialista en Investigación Criminal e intervención en juicio oral`,
                    description: `Abogada Egresados de la universidad de la Sabana (10 de marzo de 1989) especialista en Investigación Criminal e intervención en juicio oral ,  6 diplomados en derechos de las mujeres , es experta y consultora internacional (en Colombia y en Estados Unidos, Mexico, Guatemala, El Salvador, NicAragua, Costa Rica, Peru y EcuaDor) en Litigación Oral, investigación criminal, investigación y juzgamiento de violencia contra mujeres y personas LGBTI y responsabilidad penal médica y promotora y defensora de DDHH para mujeres, LGBTI y personas con afectación a su salud mental.`
                },

            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps {
    height: 350px;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
}
</style>
