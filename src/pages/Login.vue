<template>
    <main class="main">
        <section class="auth ">
            <div class="container">
                <form action="/profile" class="auth-form">
                    <h2 class="form-title">
                        Авторизация
                    </h2>
                    <div class="form-group">
                        <label for="phone">Телефон:</label>
                        <input type="tel" name="phone" id="phone" class="form-input" required placeholder="+7 900 000 00 00">
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль:</label>
                        <input type="password" name="password" id="password" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary">Войти</button>
                    </div>
                    <div class="form-group">
                        <p>Еще нет аккаунта? <router-link class="link-primary" to="/register">Зарегистрироваться</router-link></p>
                    </div>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>

</style>