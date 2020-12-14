<template>
    <v-app id="inspire">
        <header-app-component></header-app-component>
        <drawer-app-component></drawer-app-component>
        <v-content>
            <v-container fluid>
                <v-layout align-start justify-center>
                    <v-flex xs12 sm8 md4>
                        <template>
                            <v-card
                                class="mt-5"
                                style="border-radius:0px!important"
                            >
                                <v-toolbar dark flat>
                                    <v-toolbar-title
                                        >Formulario de Registro</v-toolbar-title
                                    >
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-form
                                    ref="form"
                                    class="pa-5"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-text-field
                                        clearable
                                        v-model="user.name"
                                        :counter="100"
                                        :rules="nameRules"
                                        label="Nombre"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        clearable
                                        v-model="user.email"
                                        :rules="emailRules"
                                        label="Email"
                                        required
                                    ></v-text-field>

                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                                autocomplete="off"
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
                                        </v-col>

                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                                v-model="
                                                    user.password_confirmation
                                                "
                                                :append-icon="
                                                    show2
                                                        ? 'mdi-eye'
                                                        : 'mdi-eye-off'
                                                "
                                                :rules="passwordConfirmRules"
                                                :type="
                                                    show2 ? 'text' : 'password'
                                                "
                                                label="Confirmar password"
                                                hint="Al menos 4 carácteres"
                                                counter
                                                @click:append="show2 = !show2"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row
                                        class="justify-center aling-center text-center ma-0 pa-0"
                                    >
                                        <v-col class="ma-0 pa-1 text-end">
                                            <v-btn color="error" @click="reset"
                                                >Limpiar</v-btn
                                            >
                                        </v-col>
                                        <v-col class="ma-0 pa-1 text-start">
                                            <v-btn
                                                :disabled="!valid"
                                                color="#212121"
                                                class="white--text"
                                                @click="validate"
                                                >Registrar</v-btn
                                            >
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card>
                        </template>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
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
            name: "",
            email: "",
            password: "",
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            show1: false,
            show2: false,
            snackbar: false,
            color: "",
            text: "",
            mode: "",
            response: "",
            valid: true,
            nameRules: [
                v => !!v || "El nombre es requerido",
                v =>
                    (v && v.length <= 100) ||
                    "El nombre no puede tener mas de 100 caracteres"
            ],
            emailRules: [
                v => !!v || "E-mail es requerido",
                v => /.+@.+\..+/.test(v) || "E-mail invalido"
            ],
            passwordRules: [
                v => !!v || "Requerido.",
                v => (v && v.length >= 4) || "Mínimo 4 caracteres"
            ],
            passwordConfirmRules: [
                v => !!v || "Requerido.",
                v => (v && v.length >= 4) || "Mínimo 4 caracteres",
                v => v === this.user.password || "No coinciden."
            ],
            overlay: false
        };
    },

    methods: {
        validate() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.register();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        register() {
            console.log(this.user);
            const newUser = this.user;
            this.overlay = true;
            axios
                .post("/api/register", newUser)
                .then(response => {
                    Swal.fire(
                        response.data.status === 201
                            ? "!Buen trabajo! 😀"
                            : "Oops... 😮",
                        response.data.message,
                        response.data.status === 201 ? "success" : "error"
                    ).then(result => {
                        if (response.data.status === 201) {
                            this.$router.push("/login");
                        }
                    });
                    this.reset();
                })
                .catch(error => {
                    this.overlay = false;
                    this.color = "red darken-3";
                    this.mode = "vertical";
                    console.log(error);
                    console.log(error.response.data);
                    console.log(error.response.data.message);
                    const array = error.response.data.errors;
                    console.log(array);
                    this.text = "";
                    for (var clave in array) {
                        this.text += clave + ": " + array[clave] + "\n ";
                    }

                    console.log(this.text);
                    this.text += error.response.data.message;
                    Swal.fire("Oops... 😮", this.text, "error");
                });
        }
    }
};
</script>
