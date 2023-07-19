<template>
    <main class="main">
        <section class="movie section">
            <div class="container">
                <div class="movie-body">

                    <div class="movie-images">
                        <div class="image-block main">
                            <img :src="mainImage" :alt="film.name+' poster'" class="img-cover">
                        </div>
                        <div class="movie-images-body">
                            <ScrollSlider v-bind:slides="film.images" v-bind:slide-class="'image-block'"
                                          @selected="changeImage"/>
                        </div>


                    </div>

                    <div class="movie-info">
                        <div class="film-info">
                            <h2 class="film-title">{{ film.name }}</h2>
                            <div class="film-details">
                                <span class="film-rating" v-if="film.rating">{{ film.rating }}</span>
                                <span class="film-created">{{ film.release_date }}, {{ film.country }}</span>
                                <span class="film-geres">{{ film.genres.map(genre => genre.name).join(", ") }}</span>
                                <span class="film-duration">{{ film.duration }} мин</span>
                                <span class="film-restrictions">{{ film.age_restriction }}+</span>
                            </div>

                            <p class="film-director">
                                <span class="text-muted">Режиссёр:</span> {{ film.director }}
                            </p>

                            <p class="film-description">
                                <span class="text-muted">Описание:</span> {{ film.description }}
                            </p>

                            <div class="film-actors">
                                <span class="text-muted">Список актеров:</span>
                                <ul class="actors-list">
                                    <li class="actor-item" v-for="actor in film.actors" v-bind:key="actor.id">
                                        {{ actor.role }} - {{ actor.name }} {{ actor.surname }}
                                    </li>
                                </ul>
                            </div>

                            <span class="film-price price" v-if="film.min_price">от {{ film.min_price }}</span>
                            <div class="film-manage" v-if="film.min_price">
                                <button class="btn btn-primary" @click="loadShowings">Купить билет</button>
                            </div>
                            <div v-else>
                                <p class="text-muted showings-not-found">Отсутствует в прокате</p>
                            </div>


                        </div>


                    </div>
                </div>

                <div class="showing-manage">
                    <ShowingSelect v-bind:showings="showings"/>

                    <SeatSelect v-bind:seats="[]"/>


                </div>


            </div>
        </section>
    </main>
</template>

<script async setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import request from "@/http";
import store from "@/store";
import ScrollSlider from "@/components/ScrollSlider.vue";
import ShowingSelect from "@/components/films/showings/ShowingSelect.vue";
import useEventBus from "@/composable/eventBus";
import SeatSelect from "@/components/films/seats/SeatSelect.vue";

const film = ref({});
const mainImage = ref("");
const showings = ref([]);
const route = useRoute();
const {bus} = useEventBus();

const changeImage = (value) => {
	mainImage.value = value;
};

const loadShowings = async () => {
	await request().get(`/films/${film.value.id}/showings`)
		.then(data => {
			showings.value = formatDates(data);
		})
		.catch(e => {
			store.mutations.showAlert(e.message);
		});
};

const formatDates = (dates) => {
	const res = [];
	dates.forEach(showing => {
		const index = res.findIndex(item => item.date === showing.date);

		if (index !== -1) {
			res[index].times.push({id: showing.id, time: showing.start_time, price: showing.base_price});
		} else {
			res.push({
				date: showing.date,
				times: [
					{
						id: showing.id,
						time: showing.start_time,
						price: showing.base_price,
					},
				],
			});
		}
	});
	return res;
};

watch(() => bus.value.get("showing-time-selected"), value => {
	const [id] = value ?? [];
	console.log(id);
});

await request().get(`/films/${route.params.id}`)
	.then(data => {
		film.value = data;
		mainImage.value = data.images.length ? data.images[0].image : "";
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});

</script>

<style scoped>

</style>