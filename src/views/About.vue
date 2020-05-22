<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 @click="getRecipes" class="display-3 mb-4">My recipes</h1>
                <div v-for="(item, idx) in userRecipes" :key="idx" class="subheading mb-2">
                    {{ item }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// display personnal recipes
export default {
    name: "about",
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    //mounted: () => {
    //    this.getRecipes();
    //},
    methods: {
        getRecipes() {
            this.$store.dispatch("getUserRecipes");
        }
    }
};
</script>
