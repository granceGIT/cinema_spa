<template>
    <main class="main">
        <section class="auth ">
            <div class="container">
                <form action="/profile" class="auth-form">
                    <h2 class="form-title">
                        Авторизация
                    </h2>
                    <div class="form-group" :class="errors.phone_number ? 'is-invalid' : ''">
                        <label for="phone">Телефон:</label>
                        <input type="tel" name="phone" v-model="phone_number" id="phone" class="form-input" required placeholder="+7 900 000 00 00">
                        <p class="invalid-text" v-if="errors.phone_number">{{errors.phone_number[0]}}</p>
                    </div>
                    <div class="form-group" :class="errors.password ? 'is-invalid' : ''">
                        <label for="password">Пароль:</label>
                        <input type="password" v-model="password" name="password" id="password" class="form-input" required>
                        <p class="invalid-text" v-if="errors.password">{{errors.password[0]}}</p>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary" @click="loginRequest">Войти</button>
                    </div>
                    <div class="form-group">
                        <p>Еще нет аккаунта? <router-link class="link-primary" to="/register">Зарегистрироваться</router-link></p>
                    </div>
                </form>
            </div>
        </section>
    </main>
</template>

<script setup>
import request from "@/http";
import {ref} from "vue";
import router from "@/router";
import store from "@/store";

const phone_number =ref('')
const password = ref('')
const errors = ref({})

const loginRequest = (e)=>{
    e.preventDefault()
    errors.value = {}
    store.mutations.hideAlert()
    request().post('/login',{phone_number:phone_number.value,password:password.value})
        .then(data=>{
            phone_number.value = ""
            password.value = ""
            localStorage.setItem('token',data.token)
            router.push('/profile')
        })
        .catch(e=>{
            if (e.errors){
                errors.value = e.errors
            }
            store.mutations.showAlert(e.message)
        })
}

</script>

<style scoped>

</style>