<template>
    <!-- display recipes from the choosen plan selected in HomePlan -->
    <v-container>
        <v-row v-if="choosenPlan.length">
            <v-col cols="12" class="display-1 font-weigth-black my-5">
                {{ choosenPlan }} recipes
            </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="12"
                md="6"
                lg="4"
                v-for="(item, idx) in recipes"
                :key="idx"
            >
                <v-card>
                    <v-img :src="item.recipe.image"> </v-img>
                    <v-card-title>{{ item.recipe.label }}</v-card-title>
                    <v-card-text>
                        <div class="subheading">Ingredients</div>
                        <ul>
                            <li
                                v-for="(ingredient, i) in item.recipe
                                    .ingredientLines"
                                :key="i"
                            >
                                {{ ingredient }}
                            </li>
                        </ul>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="orderRecipe(item)"
                            >Order</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MealRecipes",
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        choosenPlan() {
            return this.$store.state.choosenPlan;
        },
        // used to allow order of recipes
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        orderRecipe(item) {
            if (this.isAuthenticated) {
                // get recipe if logged in
                this.$store.dispatch("addRecipe", item);
            } else {
                //  else go to sign in page
                this.$router.push("/signin");
            }
        }
    }
};
</script>
