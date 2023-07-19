<template>
    <header class="header">
        <div class="container">
            <div class="header-body">
                <router-link to="/" class="header-logo">LOGO</router-link>
                <ul v-if="!store.getters.isAuth()" class="header-menu nav">
                    <li class="nav-item">
                        <router-link to="/films" class="nav-link">Афиша</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">Регистрация</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Авторизация</router-link>
                    </li>
                </ul>
                <ul v-else class="header-menu nav">
                    <li class="nav-item">
                        <router-link to="/films" class="nav-link">Афиша</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link">Профиль</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" @click="logout">Выход</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import store from "@/store";

const logout = () => {
	localStorage.removeItem("token");
	store.mutations.setUser({});
};
</script>

<style scoped>

</style>