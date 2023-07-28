<template>
    <form class="filters-form">
        <div class="filters-body">
            <div class="filter-block">
                <h3 class="filter-block-title">Жанры: </h3>
                <ul class="filter-list">
                    <li v-for="genre in genres" v-bind:key="genre.id">
                        <input type="checkbox" :value="genre.id" name="genre" @input="updateGenreFilters"
                               :id="'genre'+genre.id"
                               class="custom-check">
                        <label :for="'genre'+genre.id" class="filter-check-card">{{ genre.name }}</label>
                    </li>
                </ul>
            </div>

            <div class="filter-block">
                <h3 class="filter-block-title">Дата: </h3>
                <ul class="filter-list">
                    <li v-for="date in dates" :key="date.id">
                        <input type="checkbox" :value="date.date" @input="updateDateFilters" name="date"
                               :id="'date'+date.id" class="custom-check">
                        <label :for="'date'+date.id" class="filter-check-card">{{ date.name }}</label>
                    </li>
                </ul>
            </div>

            <div class="filter-block form-group">
                <h3 class="filter-block-title"><label for="search">Поиск по названию</label>: </h3>
                <div class="search-block">
                    <input type="search" class="form-input" name="search" id="search"
                           @input="updateSearch"
                           placeholder="Название фильма">
                </div>
                <LoadingSpinner v-if="timeout"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import request from "@/http";
import store from "@/store";
import {reactive, ref, watch, defineEmits} from "vue";
import {addDaysToDate, dateToSQLDate} from "@/utils";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const emit = defineEmits(["updated"]);
const genres = ref([]);
const dates = [
	{
		id: 1,
		name: "Сегодня",
		date: dateToSQLDate(new Date()),
	},
	{
		id: 2,
		name: "Завтра",
		date: dateToSQLDate(addDaysToDate(new Date(), 1)),
	},
	{
		id: 3,
		name: "Послезавтра",
		date: dateToSQLDate(addDaysToDate(new Date(), 2)),
	},
];
const timeout = ref(null);

const filters = reactive({
	genres: [],
	dates: [],
	search: "",
});

const updateDateFilters = () => {
	filters.dates = [...document.querySelectorAll("input[name='date']:checked")].map(check => check.value);
};

const updateGenreFilters = () => {
	filters.genres = [...document.querySelectorAll("input[name='genre']:checked")].map(check => check.value);
};

const updateSearch = (e) => {
	if (timeout.value) {
		clearTimeout(timeout.value);
	}
	timeout.value = setTimeout(() => {
		filters.search = e.target.value;
		timeout.value = null;
	}, 1000);
};

watch(filters, () => {
	emit("updated", {...filters});
});

const loadGenres = async () => {
	await request().get("/genres")
		.then(({data}) => {
			genres.value = data;
		})
		.catch(e => {
			store.mutations.showAlert(e.message);
		});
};

await loadGenres();
</script>

<style lang="scss" scoped>

</style>