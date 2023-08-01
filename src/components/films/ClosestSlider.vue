<template>
    <section class="hero">
        <div class="container">
            <Slider v-if="films.length" :slides="films">
                <template #slide="{slide}">
                    <ClosestCard :film="slide"></ClosestCard>
                </template>
            </Slider>
            <NotFoundRowsText :class="'not-found'" v-else>Сеансы не запланированы</NotFoundRowsText>
        </div>
    </section>
</template>

<script setup>
import Slider from "@/components/Slider.vue";
import ClosestCard from "@/components/films/ClosestCard.vue";
import request from "@/http";
import {ref} from "vue";
import store from "@/store";
import NotFoundRowsText from "@/components/NotFoundRowsText.vue";

const films = ref([]);

const loadClosest = async () => {
	await request().get("/showings/closest")
		.then(({data}) => {
			films.value = data.map(item=>({
          ...item.film,
          showing_date:item.date,
          showing_time:item.start_time
      }));

		})
		.catch(e => store.mutations.showAlert(e.message));
};

await loadClosest();
</script>

<style scoped>

</style>