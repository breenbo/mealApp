<template>
    <div>
        <v-app-bar app color="brown darken-4" dark>
            <!-- navbar icon for small screen, open side drawer -->
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="showDrawer = !showDrawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/" class="mr-4">{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <v-btn text class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer></v-spacer>
            <!-- div to hide button if user successfully logged in -->
            <div class="hidden-sm-and-down" v-if="!isAuthenticated">
                <v-btn text class="hidden-sm-and-down" to="/signin"
                    >sign in</v-btn
                >
                <v-btn
                    text
                    color="brown lighten-3"
                    class="hidden-sm-and-down"
                    to="/join"
                    >join</v-btn
                >
            </div>
            <!-- logout button for logged in user -->
            <div v-else>
              <v-btn text to="/about" class="mr-4">profile</v-btn>
                <v-btn outlined color="white" @click="logout">
                    logout
                </v-btn>
            </div>
        </v-app-bar>
        <!-- navigation drawer for small screens -->
        <v-navigation-drawer
            app
            v-model="showDrawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <!-- create list for menu -->
            <v-list>
                <template v-for="(item, index) in navItems">
                    <v-list-item :key="index">
                        <router-link :to="item.to">
                            <v-list-item-content :to="item.to"
                                >{{ item.title }}
                            </v-list-item-content>
                        </router-link>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "AppNavigation",

    data: () => {
        return {
            appTitle: "Meal Prep",
            showDrawer: false,
            navItems: [
                { title: "Menu", to: "/menu" },
                { title: "Sign In", to: "/signin" },
                { title: "Join", to: "/join" }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("userSignOut");
        }
    }
};
</script>

<style scoped>
a {
    color: white !important;
    text-decoration: none;
}
</style>
