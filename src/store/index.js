import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
// import router to route on success login or create account
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
    // all variables, source of truth
    // store recipes from api
    state: {
        choosenPlan: "",
        recipes: [],
        apiUrl: "https://api.edamam.com/search",
        user: null,
        setIsAuthenticated: false,
        userRecipes: []
    },
    // change the value of the state
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setChoosenPlan(state, value) {
            state.choosenPlan = value.charAt(0).toUpperCase() + value.slice(1);
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.setIsAuthenticated = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
        }
    },
    // change state in reaction of user inputs from a view
    actions: {
        // get the recipes from the api
        async getRecipes({ state, commit }, plan) {
            try {
                const response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: "03435a1e",
                        app_key: "b41354986c15e5764d3cbc2a59e08d74",
                        from: 0,
                        to: 9
                    }
                });
                commit("setRecipes", response.data.hits);
            } catch (error) {
                commit("setRecipes", []);
            }
        },
        setPlan({ commit }, plan) {
            commit("setChoosenPlan", plan);
        },
        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(credential => {
                    commit("setUser", credential.user);
                    commit("setIsAuthenticated", true);
                    //route to about page on success
                    router.push("/about");
                })
                .catch(() => {
                    commit("setUser", null);
                    commit("setIsAuthenticated", false);
                    // route user to home on fail
                    router.push("/");
                });
        },
        userLogin({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(credential => {
                    commit("setUser", credential.user);
                    commit("setIsAuthenticated", true);
                    //route to about page on success
                    router.push("/about");
                })
                .catch(() => {
                    commit("setUser", null);
                    commit("setIsAuthenticated", false);
                    // route user to home on fail
                    router.push("/");
                });
        },
        userSignOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit("setUser", null);
                    commit("setIsAuthenticated", false);
                    router.push("/");
                })
                .catch(() => {
                    commit("setUser", null);
                    commit("setIsAuthenticated", false);
                    router.push("/");
                });
        },
        addRecipe({ state }, payload) {
            firebase
                .database()
                .ref("users")
                .child(state.user.uid)
                .push(payload.recipe.label);
        },
        getUserRecipes({ state, commit }) {
            // get the recipes in the database
            return firebase
                .database()
                .ref("users/" + state.user.uid)
                .once("value", snapshot => {
                    commit("setUserRecipes", snapshot.val());
                });
        }
    },
    modules: {},
    getters: {
        // used to set visibility of the logout/login/signin buttons
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
