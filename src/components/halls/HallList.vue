<template>
    <section class="halls section">
        <div class="container">
            <h2 class="section-title">Залы</h2>
            <div class="halls-body">
                <HallCard v-for="hall in halls" :key="hall.id" :hall="hall"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import HallCard from "@/components/halls/HallCard.vue";
import request from "@/http";
import store from "@/store";
import {ref} from "vue";

const halls = ref([]);

const loadHalls = async () => {
	await request().get("/halls")
		.then(({data}) => {
			halls.value = data;
		})
		.catch(error => {
			store.mutations.showAlert(error);
		});
};

await loadHalls();
</script>

<style scoped>

</style>