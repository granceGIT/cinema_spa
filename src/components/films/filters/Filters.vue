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
                    <li>
                        <input type="checkbox" :value="dateToSQLDate(new Date())" @input="updateDateFilters" name="date"
                               id="date1" class="custom-check">
                        <label for="date1" class="filter-check-card">Сегодня</label>
                    </li>

                    <li>
                        <input type="checkbox" :value="dateToSQLDate(addDaysToDate(new Date(),1))"
                               @input="updateDateFilters" name="date" id="date2" class="custom-check">
                        <label for="date2" class="filter-check-card">Завтра</label>
                    </li>

                    <li>
                        <input type="checkbox" :value="dateToSQLDate(addDaysToDate(new Date(),2))"
                               @input="updateDateFilters" name="date" id="date3" class="custom-check">
                        <label for="date3" class="filter-check-card">Послезавтра</label>
                    </li>

                </ul>
            </div>

            <div class="filter-block form-group">
                <h3 class="filter-block-title"><label for="search">Поиск по названию</label>: </h3>
                <div class="search-block">
                    <input type="search" class="form-input" name="search" id="search"
                           v-model="filter.search"
                           placeholder="Название фильма">
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import request from "@/http";
import store from "@/store";
import {reactive, ref, watch, defineEmits} from "vue";
import {addDaysToDate, dateToSQLDate} from "@/utils";

const emit = defineEmits(["updated"]);

const genres = ref([]);

const filter = reactive({
	genres: [],
	dates: [],
	search: "",
});

const filtersToQuery = (filterName, filters) => {
	if (filters.length) {
		return filters.map(value => `${filterName}=${value}&`).join("");
	}
	return "";
};

const updateDateFilters = () => {
	filter.dates = [...document.querySelectorAll("input[name='date']:checked")].map(check => check.value);
};

const updateGenreFilters = () => {
	filter.genres = [...document.querySelectorAll("input[name='genre']:checked")].map(check => check.value);
};

watch(filter, async () => {
	await request().get(`/films?${filtersToQuery("genres[]", filter.genres)}${filtersToQuery("dates[]", filter.dates)}search=${filter.search}`)
		.then(data => {
			emit("updated", data);
		})
		.catch(e => {
			store.mutations.showAlert(e.message);
		});
});

await request().get("/genres")
	.then(data => {
		genres.value = data;
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});
</script>

<style lang="scss" scoped>

</style>