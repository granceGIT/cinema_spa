<template>
    <main class="main">
        <section class="auth ">
            <div class="container">
                <form action="/profile" class="auth-form">
                    <h2 class="form-title">
                        Регистрация
                    </h2>
                    <div class="form-group" :class="{'is-invalid':errors.name}">
                        <label for="name">Имя:</label>
                        <input type="text" name="name" v-model="name" id="name" class="form-input" required
                               placeholder="Иван">
                        <p class="invalid-text" v-if="errors.name">{{ errors.name.join(";\n") }}</p>
                    </div>
                    <div class="form-group" :class="{'is-invalid':errors.phone_number}">
                        <label for="phone">Телефон:</label>
                        <input type="tel" name="phone" v-model="phone_number" id="phone" class="form-input" required
                               placeholder="+7 900 000 00 00">
                        <p class="invalid-text" v-if="errors.phone_number">{{ errors.phone_number.join(";\n") }}</p>
                    </div>
                    <div class="form-group" :class="{'is-invalid':errors.password}">
                        <label for="password">Пароль:</label>
                        <input type="password" v-model="password" name="password" id="password" class="form-input"
                               required>
                        <p class="invalid-text" v-if="errors.password">{{ errors.password.join(";\n") }}</p>
                    </div>

                    <div class="form-group line">
                        <input type="checkbox" v-model="agreement" name="agreement" id="agreement" required checked>
                        <label for="agreement">Согласие с правилами регистрации</label>
                        <p class="invalid-text" v-if="errors.agreement">{{ errors.agreement.join(";\n") }}</p>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary" @click="registerRequest">Зарегистрироваться</button>
                    </div>
                    <div class="form-group">
                        <p>Уже есть аккаунт?
                            <router-link class="link-primary" to="/login">Войти</router-link>
                        </p>
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
import {isValidPhoneNumber, parsePhoneNumber} from "libphonenumber-js";

const name = ref("");
const phone_number = ref("");
const password = ref("");
const agreement = ref(true);
const errors = ref({});

const registerRequest = (e) => {
	e.preventDefault();
	store.mutations.hideAlert();
	errors.value = {};
	if (isValidPhoneNumber(phone_number.value, "RU")) {
		request().post("/register", {
			name: name.value,
			phone_number: parsePhoneNumber(phone_number.value, "RU").number,
			password: password.value,
			agreement: agreement.value,
		})
			.then(({data}) => {
				phone_number.value = "";
				password.value = "";
				localStorage.setItem("token", data.token);
				router.push("/profile");
			})
			.catch(e => {
				if (e.errors) {
					errors.value = e.errors;
				}
				store.mutations.showAlert(e.message);
			});
	} else {
		errors.value.phone_number = ["Нверный формат номера."];
	}
};


</script>

<style scoped>

</style>