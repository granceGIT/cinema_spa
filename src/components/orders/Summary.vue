<template>
    <div class="summary">
        <div class="total-tickets">Дата: {{ SQLDateToDate(selectedShowing.date) }}</div>
        <div class="total-tickets">Начало сеанса: {{ selectedShowing.time }}</div>
        <div class="selected-seats">Выбрано билетов: <span class="selected-seats-count">{{
            props.selectedSeats.length
            }}</span></div>
        <div class="selected-tickets">Общая стоимость билетов: <span
                class="base-ticket-price price">{{ totalPrice }}</span></div>

        <button class="btn btn-primary checkout-btn" @click="checkoutRequest">Подтвердить</button>
    </div>
</template>

<script setup>
import {computed, defineProps} from "vue";
import {SQLDateToDate} from "@/utils";
import request from "@/http";
import store from "@/store";
import router from "@/router";

const props = defineProps({
	selectedSeats: Array,
	selectedShowing: Object,
});

const totalPrice = computed(() => props.selectedSeats.reduce((acc, item) => acc + parseFloat(item.price_ratio) * parseFloat(props.selectedShowing.price), 0));

const checkoutRequest = async () => {
	const token = localStorage.getItem("token");
	await request(token).post("/orders/create", {
		showing_id: props.selectedShowing.id,
		tickets: props.selectedSeats.map(seat => {
			return {seat_id: seat.id};
		}),
		price: totalPrice.value,
	})
		.then(({data}) => {
			store.mutations.showAlert(`Заказ #${data.id} совершен!`, "alert");
			router.push("/profile");
		})
		.catch(e => {
			store.mutations.showAlert(e.message);
		});
};

</script>

<style lang="scss" scoped>

</style>