<template>
    <v-container fill-height>
        <v-row>
            <v-col cols="12">
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="mdi-mail"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="mdi-lock"
                                name="passsword"
                                label="Password"
                                id="password"
                                type="password"
                                required
                                v-model="password"
                                :rules="passwordRules"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                        >
                            Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SignIn",
    data: () => {
        return {
            valid: false,
            email: "",
            password: "",
            emailRules: [
                v => !!v || "Email is required",
                v => /.+@.+/.test(v) || "Email must be valid"
            ],
            passwordRules: [
                v => !!v || "Paswword is required",
                v =>
                    v.length >= 6 ||
                    "Password must hove more thant 6 characters"
            ]
        };
    },
    methods: {
        submit() {
          // use lazy-validation to have form.validate
            if (this.$refs.form.validate) {
                this.$store.dispatch("userLogin", {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
};
</script>
