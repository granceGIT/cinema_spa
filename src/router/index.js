import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Movie from "@/pages/Movie.vue";
import Profile from "@/pages/Profile.vue";
import store from "@/store";
import request from "@/http";
import Films from "@/pages/Films.vue";


const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/films",
		name: "showings",
		component: Films,
	},
	{
		path: "/films/:id",
		name: "movie",
		component: Movie,
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
		meta: {requiresAuth: true},
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
			};
		} else {
			return {top: 0};
		}
	},
});

router.beforeEach(async (to, from, next) => {
	store.mutations.hideAlert();
	const token = localStorage.getItem("token");
	if (token) {
		store.mutations.setUser(
			await request(token).get("/profile")
				.then(data => {
					return data;
				})
				.catch(() => {
					localStorage.removeItem("token");
					return {};
				}));
	}


	if (to.meta.requiresAuth && !store.getters.isAuth()) {
		next({name: "login"});
	} else next();
});

export default router;
