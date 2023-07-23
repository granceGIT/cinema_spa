<template>
    <main class="main">
        <section class="filters">
            <div class="container">
                <h2 class="section-title">
                    Фильтры
                </h2>
                <div>
                    <Suspense>
                        <template #default>
                            <Filters @updated="updateFilms"/>
                        </template>
                        <template #fallback>
                            <LoadingSpinner/>
                        </template>
                    </Suspense>
                </div>
            </div>

        </section>

        <section class="showings section">
            <div class="container">
                <h2 class="section-title">
                    Фильмы
                </h2>
                <div class="showings-body">
                    <FilmsList v-if="films.length" v-bind:films="films"/>
                    <NotFoundRowsText :class="'showings-not-found'" v-else>Ничего не найдено</NotFoundRowsText>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import FilmsList from "@/components/films/List.vue";
import Filters from "@/components/films/filters/Filters.vue";
import {ref} from "vue";
import request from "@/http";
import store from "@/store";
import NotFoundRowsText from "@/components/NotFoundRowsText.vue";

const films = ref([]);

await request().get("/films")
	.then(data => {
		films.value = data;
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});

const updateFilms = (value) => {
	films.value = value;
};


</script>

<style scoped>

</style>