<template>
    <main class="main">
        <section class="section profile">
            <div class="container">
                <div class="profile-body">
                    <div class="profile-data">
                        <h2 class="section-title">Данные профиля</h2>
                        <div class="profile-data-card">
                            <div class="text-muted">Имя:</div>
                            <div>{{ user.name }}</div>
                        </div>
                        <div class="profile-data-card">
                            <div class="text-muted">Телефон:</div>
                            <div>**{{ user.phone_number.slice(-4) }}</div>
                        </div>
                        <div class="profile-data-card">
                            <div class="text-muted">Заказов:</div>
                            <div>{{ user.orders_count }}</div>
                        </div>
                        <div class="profile-data-card">
                            <div class="text-muted">Оценок:</div>
                            <div>{{ user.rates_count }}</div>
                        </div>
                        <div class="profile-data-card profile-manage">
                            <button class="btn btn-primary">Изменить данные</button>
                            <button class="btn btn-primary">Выход</button>
                        </div>
                    </div>
                    <div class="orders-body">
                        <h2 class="section-title">Активные заказы</h2>
                        <div class="active-orders">
                            <ActiveCard v-for="order in orders.active" v-bind:key="order.id" v-bind:order="order"/>
                        </div>
                        <h2 class="section-title">Прошлые заказы</h2>
                        <div class="previous-orders">
                            <PreviousCard v-for="order in orders.previous" v-bind:key="order.id" v-bind:order="order"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import store from "@/store";
import {ref} from "vue";
import request from "@/http";
import ActiveCard from "@/components/orders/ActiveCard.vue";
import PreviousCard from "@/components/orders/PreviousCard.vue";

const user = store.state.user;
const orders = ref([]);

const token = localStorage.getItem("token");
await request(token).get("/orders")
	.then(data => {
		orders.value = data;
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});
</script>

<style scoped>

</style>