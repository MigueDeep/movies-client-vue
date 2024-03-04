import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "peliculas",
        component: () => import("../components/Movie.vue")
    },
    {
        path: "/peliculas2",
        name: "peliculas2",
        component: () => import("../components/MovieD&D.vue")
    }
]

const router = new VueRouter({routes, mode: 'history'})
export default router;