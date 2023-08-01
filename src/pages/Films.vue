<template>
    <main class="main">
        <div>
            <Suspense>
                <template #default>
                    <Filters @updated="updateFilters"/>
                </template>
                <template #fallback>
                    <LoadingSpinner/>
                </template>
            </Suspense>
        </div>

        <section class="showings section">
            <div class="container">
                <h2 class="section-title">
                    Фильмы
                </h2>
                <div class="showings-body">
                    <FilmsList v-if="films.length" v-bind:films="films"/>
                    <NotFoundRowsText :class="'showings-not-found'" v-else>Ничего не найдено</NotFoundRowsText>
                </div>

                <Pagination :pages="totalPages" :current-page="page" @selected="setPage"></Pagination>
            </div>
        </section>


    </main>
</template>

<script setup>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import FilmsList from "@/components/films/List.vue";
import Filters from "@/components/films/filters/Filters.vue";
import {ref, watch} from "vue";
import request from "@/http";
import store from "@/store";
import NotFoundRowsText from "@/components/NotFoundRowsText.vue";
import Pagination from "@/components/Pagination.vue";
import {filtersToQuery} from "@/utils";

const films = ref([]);
const page = ref(1);
const limit = ref(8);
const totalPages = ref(0);
const filters = ref({});

const setPage = (pageNumber) => {
	page.value = pageNumber;
};

const updateFilters = (value) => {
	filters.value = value;
};

const loadFilms = async () => {
	const queryFilters = filtersToQuery({
		"dates[]": filters.value.dates ?? [],
		"genres[]": filters.value.genres ?? [],
		"search": filters.value.search ?? "",
		"limit": limit.value,
		"page": page.value,
	});
	await request().get(`/films?${queryFilters}`)
		.then(({data, meta}) => {
			films.value = data;
			if (meta) {
				totalPages.value = Math.ceil(meta.total / limit.value);
				page.value = meta.current_page;
			}
		})
		.catch(e => {
			store.mutations.showAlert(e.message);
		});
};

await loadFilms();

watch([page, filters], loadFilms);

</script>

<style scoped>

</style>