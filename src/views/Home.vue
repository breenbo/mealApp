<template>
    <div>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </div>
</template>

<script>
import HomeHero from "@/components/HomeHero.vue";
import HomeDetails from "@/components/HomeDetails.vue";
import HomePlans from "@/components/HomePlans.vue";

export default {
    name: "Home",
    components: { HomeHero, HomeDetails, HomePlans }
};
</script>
