<template>
    <header class="header">
        <div class="container">
            <div class="header-body">
                <router-link to="/" class="header-logo">LOGO</router-link>
                <ul class="header-menu nav">
                    <li class="nav-item"><router-link to="/showings" class="nav-link">Афиша</router-link></li>
                    <li class="nav-item"><router-link to="/register" class="nav-link">Регистрация</router-link></li>
                    <li class="nav-item"><router-link to="/login" class="nav-link">Авторизация</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>