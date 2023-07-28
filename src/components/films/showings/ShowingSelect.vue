<template>
    <div class="showing-select-block">
        <h3 class="showing-select-title">Выберите сеанс: </h3>
        <div class="showing-select">
            <Card v-for="showing in showings" v-bind:key="showing.id" :selectedID="props.selectedID"
                  v-bind:showing="showing"/>
        </div>
    </div>
</template>

<script async setup>
import {defineProps, ref} from "vue";
import Card from "@/components/films/showings/Card.vue";
import request from "@/http";
import store from "@/store";

const props = defineProps({
	filmID: Number,
	selectedID: Number,
});

const showings = ref([]);

const formatDates = (dates) => {
	const res = [];
	dates.forEach(showing => {
		const timeCard = {
			id: showing.id,
			time: showing.start_time,
			price: showing.base_price,
		};

		const index = res.findIndex(item => item.date === showing.date);
		if (index !== -1) {
			res[index].times.push(timeCard);
		} else {
			res.push({
				date: showing.date,
				times: [timeCard],
			});
		}
	});
	return res;
};

const loadShowings = async () => {
	await request().get(`/films/${props.filmID}/showings`)
		.then(({data}) => {
			showings.value = formatDates(data);
		})
		.catch(e => {
			store.mutations.showAlert(e.message);
		});
};

await loadShowings();


</script>

<style lang="scss" scoped>

</style>