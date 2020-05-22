<template>
    <v-container fluid>
        <v-row>
            <home-plans></home-plans>
            <meal-recipes></meal-recipes>
        </v-row>
    </v-container>
</template>

<script>
import HomePlans from "@/components/HomePlans.vue";
import MealRecipes from "@/components/MealRecipes.vue";

export default {
    name: "Menu",
    components: { HomePlans, MealRecipes }
};
</script>

<style scoped></style>
