import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/menu",
        name: "menu",
        component: () =>
            import(/* webpackChunkName: "menu" */ "../views/Menu.vue")
    },
    {
        path: "/signin",
        name: "signin",
        component: () =>
            import(/* webpackChunkName: "singin" */ "../views/Signin.vue")
    },
    {
        path: "/join",
        name: "join",
        component: () =>
            import(/* webpackChunkName: "join" */ "../views/Join.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
