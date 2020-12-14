<template>
    <v-app id="inspire">
        <header-app-component></header-app-component>
        <drawer-app-component></drawer-app-component>
        <v-content class="transparent">
            <v-container fluid fill-height>
                <v-layout
                    :class="
                        $vuetify.breakpoint.smAndUp
                            ? 'align-center'
                            : 'align-start'
                    "
                    justify-center
                    wrap
                >
                    <v-flex xs12 sm8 md7 lg5>
                        <v-card
                            class="elevation-12"
                            style="border-radius:0px!important"
                        >
                            <v-card-text class="ma-0 pa-0">
                                <v-layout>
                                    <v-flex
                                        xs5
                                        v-if="$vuetify.breakpoint.smAndUp"
                                    >
                                        <v-card
                                            height="420"
                                            width="300"
                                            class="elevation-12"
                                            style="border-radius:0;"
                                        >
                                            <v-container fluid>
                                                <v-row
                                                    no-gutters
                                                    align="end"
                                                    justify="start"
                                                    style="height: 420px;"
                                                >
                                                    <v-col cols="12">
                                                        <p
                                                            class="body-1 white--text px-2"
                                                            style="border-radius: 10px;background-color:rgba(10, 10, 10, 0.38);"
                                                        >
                                                            <i
                                                                >¡Haciendo a la
                                                                Gente Exitosa en
                                                                un mundo
                                                                cambiante!.</i
                                                            >
                                                        </p>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card>
                                    </v-flex>
                                    <v-flex>
                                        <v-toolbar dark flat dense>
                                            <v-container>
                                                <v-row
                                                    class="text-center justify-center aling-center"
                                                >
                                                    <v-col>
                                                        <v-toolbar-title
                                                            >Formulario de
                                                            Ingreso
                                                        </v-toolbar-title>
                                                    </v-col>
                                                </v-row>
                                            </v-container>

                                            <v-spacer></v-spacer>
                                        </v-toolbar>
                                        <v-form
                                            v-on:submit.prevent="login"
                                            ref="form"
                                            v-model="valid"
                                            lazy-validation
                                            class="px-6 pt-4"
                                        >
                                            <v-text-field
                                                prepend-icon="mdi-email"
                                                v-model="user.email"
                                                :rules="emailRules"
                                                label="Email"
                                                required
                                                clearable
                                            ></v-text-field>
                                            <v-text-field
                                                prepend-icon="mdi-key"
                                                v-model="user.password"
                                                :append-icon="
                                                    show1
                                                        ? 'mdi-eye'
                                                        : 'mdi-eye-off'
                                                "
                                                :rules="passwordRules"
                                                :type="
                                                    show1 ? 'text' : 'password'
                                                "
                                                label="Password"
                                                hint="Al menos 4 carácteres"
                                                counter
                                                @click:append="show1 = !show1"
                                            ></v-text-field>
                                            <v-checkbox
                                                v-model="user.remember"
                                                label="Recuerdame"
                                            ></v-checkbox>
                                            <v-container class="ma-0 pa-0 pb-8">
                                                <v-row
                                                    class="justify-center aling-center text-center ma-0 pa-0"
                                                >
                                                    <v-col class="ma-0 pa-1">
                                                        <v-btn
                                                            color="error"
                                                            @click="reset"
                                                            >Limpiar</v-btn
                                                        >
                                                    </v-col>
                                                    <v-col class="ma-0 pa-1">
                                                        <v-btn
                                                            :disabled="!valid"
                                                            color="#212121"
                                                            class="white--text"
                                                            @click="validate"
                                                            >Ingresar</v-btn
                                                        >
                                                    </v-col>
                                                </v-row>
                                                <v-row
                                                    class="justify-center aling-center text-center ma-0 pa-0"
                                                >
                                                    <v-col class="ma-0 pa-0">
                                                        <a
                                                            href="/send-notification"
                                                            text
                                                            >Olvidaste tu
                                                            contraseña</a
                                                        >
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-form>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-snackbar
            v-model="snackbar"
            :color="color"
            :right="true"
            :timeout="4000"
            :top="true"
        >
            {{ text }}
            <v-btn dark text icon @click="snackbar = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

        <div class="text-center">
            <v-overlay :absolute="true" :opacity="0.9" :value="overlay">
                <v-row class="mb-6" no-gutters>
                    <v-col sm="12"
                        ><v-progress-circular
                            indeterminate
                            size="64"
                        ></v-progress-circular>
                    </v-col>

                    <v-col class="mt-5">
                        <span class="white--text">
                            Un momento por favor, estamos procesando su
                            solicitud
                        </span>
                    </v-col>
                </v-row>
            </v-overlay>
        </div>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            valid: true,
            snackbar: false,
            color: "",
            mode: "",
            text: "",
            user: { email: "", password: "", remember: true },
            show1: false,
            passwordRules: [
                v => !!v || "El password es Requirido.",
                v => (v && v.length >= 4) || "Minimo 4 caracteres"
            ],
            emailRules: [
                v => !!v || "EL email es requerido",
                v => /.+@.+\..+/.test(v) || "El email debe ser válido"
            ],
            checkbox: false,
            overlay: false,
            code: null
        };
    },
    mounted() {
        let params = new URLSearchParams(location.search);
        var status = params.get("status");
        var message = params.get("message");
        if (status !== null) {
            Swal.fire(
                status === "200" ? "!Buen trabajo! 😀" : "Oops... 😮",
                message,
                status === "200" ? "success" : "error"
            );
        }
    },
    methods: {
        validate() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.login();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },

        login() {
            console.log(this.user);
            const newUser = this.user;
            this.overlay = true;
            axios
                .post("/api/login", newUser)
                .then(response => {
                    this.color = "green";
                    this.mode = "";
                    this.text = "Información correcta 😀, Bienvenido! ";
                    this.snackbar = true;
                    console.log("hasta aqui yo voy");
                    console.log(response.data);

                    auth.login(
                        response.data.token,
                        response.data.user,
                        response.data.roles
                    );
                    // console.log("despues del login");

                    try {
                        this.overlay = false;
                        Swal.fire(
                            "¡Buen trabajo!",
                            "Información correcta 😀, Bienvenido! ",
                            "success"
                        ).then(result => {
                            if (response.status === 200) {
                                this.$router.push("/dashboard");
                                location.reload();
                            }
                        });
                    } catch (error) {
                        this.overlay = false;
                        console.log(error);
                    }
                })
                .catch(error => {
                    this.mode = "";
                    this.color = "red darken-3";
                    //console.log('soy error',error);
                    // console.log(`soy error.response.data ${error.response.data}`);
                    //console.log(
                    // `soy error.response.data.message ${error.response.data.message}`
                    // );
                    const array = error.response.data.errors;
                    this.overlay = false;
                    console.log(`soy un array ${array}`);
                    this.text = "";
                    for (var clave in array) {
                        this.text += clave + ": " + array[clave] + "\n ";
                    }
                    //console.log(this.text);
                    this.text += error.response.data.message;
                    // this.snackbar = true;

                    Swal.fire("¡Algo salió mal! 😥", this.text, "error");
                    // if (typeof array === "undefined") {
                    //     setTimeout(() => location.reload(), 500);
                    // }
                });
        }
    }
};
</script>
