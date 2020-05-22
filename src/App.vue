<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import appNavigation from "@/components/Navigation.vue";

export default {
    name: "app",
    components: { appNavigation }
};
</script>
