<template>
    <v-container fluid fill-height id="homehero">
        <v-row>
            <v-col cols="12">
                <v-row
                    justify="end"
                    class="display-4 font-weight-black white--text text--lighten-4 mb-4 mr-2"
                >
                    Healthy Meals</v-row
                >
                <v-row
                    justify="end"
                    class="display-2 brown--text text--lighten-4 mr-2"
                >
                    Everyday. Everywhere.
                </v-row>
            </v-col>
            <!-- 
            <v-col cols="12">
                <v-row justify="center" id="buttonRow">
                    <v-btn fab color="brown darken-2" dark>
                        <v-icon large class="mdi mdi-chevron-down"></v-icon>
                    </v-btn>
                </v-row>
            </v-col>
            -->
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "HomeHero"
};
</script>

<style scoped>
#homehero {
    background: url("../../public/homehero.jpg");
    background-size: cover;
    background-position: center;
    height: 60vh;
    width: 100%;
}
</style>
