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
                    </div>
                    <div class="orders-body">
                        <h2 class="section-title">Активные заказы</h2>
                        <div class="active-orders" v-if="orders.active.length">
                            <ActiveCard v-for="order in orders.active" :key="order.id" :order="order"/>
                        </div>
                        <NotFoundRowsText v-else>Ничего не найдено</NotFoundRowsText>
                        <h2 class="section-title">Прошлые заказы</h2>
                        <div class="previous-orders" v-if="orders.previous.length">
                            <PreviousCard v-for="order in orders.previous" :key="order.id" :order="order"
                                          @rate="rateFilm"/>
                        </div>
                        <NotFoundRowsText v-else>Ничего не найдено</NotFoundRowsText>
                    </div>
                </div>
            </div>
        </section>
        <Modal :visible="rateModalVisible" @close="rateModalVisible=false">
            <h2>Насколько вам понравился фильм &laquo;{{ filmToRate.name }}&raquo;?</h2>
            <Rating :rates="10" :selected="filmToRate.rate" @selected="updateFilmRate"/>
        </Modal>
    </main>
</template>

<script setup>
import store from "@/store";
import {ref} from "vue";
import request from "@/http";
import ActiveCard from "@/components/orders/ActiveCard.vue";
import PreviousCard from "@/components/orders/PreviousCard.vue";
import Modal from "@/components/Modal.vue";
import Rating from "@/components/Rating.vue";
import NotFoundRowsText from "@/components/NotFoundRowsText.vue";

const user = store.state.user;
const orders = ref([]);
const rateModalVisible = ref(false);
const filmToRate = ref({});
const token = localStorage.getItem("token");

const rateFilm = (film) => {
	filmToRate.value = film;
	rateModalVisible.value = true;
};

const updateFilmRate = async (rate) => {
	filmToRate.value.rate = rate;
	await request(token).post(`/films/${filmToRate.value.id}/rate`, {rate})
		.then(() => store.mutations.showAlert("Спасибо за вашу оценку!", "alert"))
		.catch((e) => store.mutations.showAlert(e.message));
	rateModalVisible.value = false;
	await loadOrders();
};


const loadOrders = async () => {
	await request(token).get("/orders")
		.then(data => {
			orders.value = data;
		})
		.catch(e => {
			store.mutations.showAlert(e);
		});
};

await loadOrders();
</script>

<style scoped>

</style>