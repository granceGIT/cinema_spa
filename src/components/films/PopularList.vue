<template>
    <div class="popular-body" v-if="films.length">
        <PopularCard v-for="film in films" :key="film.id" :film="film"/>
    </div>
    <NotFoundRowsText v-else>Ничего не найдено</NotFoundRowsText>

</template>

<script setup>

import {ref} from "vue";
import request from "@/http";
import store from "@/store";
import PopularCard from "@/components/films/PopularCard.vue";
import NotFoundRowsText from "@/components/NotFoundRowsText.vue";

const films = ref([]);

await request().get("/films/popular")
	.then(data => {
		films.value = data;
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});
</script>

<style lang="scss" scoped>

</style>