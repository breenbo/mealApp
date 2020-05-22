<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="display-1 font-weigth-black my-5">
                Available meal plans
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-card>
                    <v-img
                        src="http://source.unsplash.com/hjCA3ecCXAQ"
                        height="400px"
                    >
                        <v-card-title
                            class="headline font-weight-black white--text"
                            >KETO</v-card-title
                        >
                    </v-img>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0">Keto</h3>
                        <div class="body-1">
                            Adipisicing ullam totam nulla consequatur quis.
                            Aperiam dolore quis dolorem veritatis eum Hic
                            repudiandae consectetur quo aliquid ex Natus rem
                        </div>
                    </v-card-title>
                    <v-card-actions v-if="$route.name === 'menu'">
                        <v-btn
                            outlined
                            block
                            color="green"
                            @click="showRecipes('keto')"
                            >Select this plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-img
                        src="http://source.unsplash.com/6S27S6pZ6o0"
                        height="400px"
                    >
                        <v-card-title
                            class="headline font-weight-black white--text"
                            >PALEO</v-card-title
                        >
                    </v-img>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0">Paleo</h3>
                        <div class="body-1">
                            Adipisicing ullam totam nulla consequatur quis.
                            Aperiam dolore quis dolorem veritatis eum Hic
                            repudiandae consectetur quo aliquid ex Natus rem
                        </div>
                    </v-card-title>
                    <v-card-actions v-if="$route.name === 'menu'">
                        <v-btn
                            outlined
                            block
                            color="green"
                            @click="showRecipes('paleo')"
                            >Select this plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-img
                        src="http://source.unsplash.com/1SPu0KT-Ejg"
                        height="400px"
                    >
                        <v-card-title
                            class="headline font-weight-black white--text"
                            >VEGAN</v-card-title
                        >
                    </v-img>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0">Vegan</h3>
                        <div class="body-1">
                            Adipisicing ullam totam nulla consequatur quis.
                            Aperiam dolore quis dolorem veritatis eum Hic
                            repudiandae consectetur quo aliquid ex Natus rem
                        </div>
                    </v-card-title>
                    <v-card-actions v-if="$route.name === 'menu'">
                        <v-btn
                            outlined
                            block
                            color="green"
                            @click="showRecipes('vegan')"
                            >Select this plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "HomePlans",
    methods: {
        showRecipes(plan) {
            this.$store.dispatch("getRecipes", plan);
          this.$store.dispatch("setPlan", plan);
        }
    }
};
</script>

<style scoped></style>
