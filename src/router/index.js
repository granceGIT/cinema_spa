import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Showings from "@/pages/Showings.vue";
import Movie from "@/pages/Movie.vue";
import Profile from "@/pages/Profile.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/showings',
    name: 'showings',
    component: Showings
  },
  {
    path: '/showings/:id',
    name: 'movie',
    component: Movie
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/:pathMatch(.*)*',
    redirect:'/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
