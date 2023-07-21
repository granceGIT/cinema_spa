<template>
    <div class="showing-select-block">
        <div class="legend" v-if="seats.length">
            <div class="child-ticket bg-primary">Занято</div>
            <div class="child-ticket bg-alt">Эконом: <span class="price">{{ parseFloat(props.showing.price)*parseFloat(seatInfo.find(item=>item.name==='Эконом').price_ratio) }}</span>
            </div>
            <div class="adult-ticket">Стандарт: <span class="price">{{ parseFloat(props.showing.price)*parseFloat(seatInfo.find(item=>item.name==='Стандарт').price_ratio) }}</span></div>
        </div>
        <h3 class="showing-select-title">Выберите места: </h3>
        <div class="seat-select">
            <div class="screen-visually">
                Экран
            </div>
            <Row v-for="row in seats" :key="row" :selected="props.selected" :row="row"/>
        </div>
    </div>
</template>

<script async setup>
import {defineProps, ref} from "vue";
import Row from "@/components/films/seats/Row.vue";
import request from "@/http";
import store from "@/store";

const props = defineProps({
	showing: Object,
	selected: Array,
});

const seats = ref([]);
const seatInfo = ref([]);


const formatSeats = (seats) => {
	const res = [];
	seats.forEach(seat => {
		const seatCard = {
			id: seat.id,
			number: seat.seat_number,
			type: seat.seat_type,
			is_occupied: seat.is_occupied,
			price_ratio: seat.price_ratio,
		};

		const index = res.findIndex(item => item.row === seat.seat_row);
		if (index !== -1) {
			res[index].seats.push(seatCard);
		} else {
			res.push({
				row: seat.seat_row,
				seats: [seatCard],
			});
		}
	});
	return res;
};

await request().get(`/showings/${props.showing.id}/seats`)
	.then(data => {
		seats.value = formatSeats(data.seats);
		seatInfo.value = data.seat_info;
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});


</script>

<style lang="scss" scoped>

</style>