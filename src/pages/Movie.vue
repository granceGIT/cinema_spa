<template>
    <main class="main">
        <section class="movie section">
            <div class="container">
                <div class="movie-body">

                    <div class="movie-images">
                        <div class="image-block main">
                            <img :src="mainImage.image" :alt="film.name+' poster'" class="img-cover"
                                 @click="imageViewerVisible=true">
                        </div>
                        <div class="movie-images-body" v-if="film.images.length">
                            <ScrollSlider :slides="film.images" :slide-class="'image-block'"
                                          @selected="changeImage"/>
                        </div>


                    </div>

                    <div class="movie-info">
                        <div class="film-info">
                            <h2 class="film-title">{{ film.name }}</h2>
                            <div class="film-details">
                                <span class="film-rating" v-if="film.rating">{{ film.rating }}</span>
                                <span class="film-created">{{ film.release_date }}, {{ film.country }}</span>
                                <span class="film-genres">{{ film.genres.map(genre => genre.name).join(", ") }}</span>
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
                                <button class="btn btn-primary" @click="buyTicket">Купить билет</button>
                            </div>
                            <div v-else>
                                <p class="text-muted showings-not-found">Отсутствует в прокате</p>
                            </div>


                        </div>


                    </div>
                </div>

                <div class="showing-manage" v-if="loadShowings">
                    <Suspense>
                        <template #default>
                            <ShowingSelect :filmID="film.id" :selectedID="selectedShowing.id"/>
                        </template>
                        <template #fallback>
                            <LoadingSpinner/>
                        </template>
                    </Suspense>

                    <Suspense v-if="Object.keys(selectedShowing).length">
                        <template #default>
                            <SeatSelect :showing="selectedShowing" :selected="selectedSeats.map(seat=>seat.id)"
                                        :key="selectedShowing.id"/>
                        </template>
                        <template #fallback>
                            <LoadingSpinner/>
                        </template>
                    </Suspense>

                    <Summary v-if="selectedSeats.length" :selectedSeats="selectedSeats"
                             :selectedShowing="selectedShowing"/>


                </div>

                <ImageViewer :visible="imageViewerVisible" @close="imageViewerVisible=false" :currentImage="mainImage" @next="nextImage" @prev="prevImage"></ImageViewer>
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
import SeatSelect from "@/components/films/seats/SeatSelect.vue";
import LoadingSpinner from "@/App.vue";
import useEventBus from "@/composable/eventBus";
import Summary from "@/components/orders/Summary.vue";
import router from "@/router";
import ImageViewer from "@/components/ImageViewer.vue";

const film = ref({});
const mainImage = ref("");
const route = useRoute();
const selectedShowing = ref({});
const selectedSeats = ref([]);
const {bus} = useEventBus();
const loadShowings = ref(false);
const imageViewerVisible = ref(false);

const changeImage = (value) => {
	mainImage.value = value;
};

const getCurrentImageIndex = ()=>{
    return film.value.images.findIndex(image=>image.id===mainImage.value.id)
};

const nextImage = ()=>{
    const index = getCurrentImageIndex();
    if(index===film.value.images.length-1){
        changeImage(film.value.images[0])
    }
    else{
        changeImage(film.value.images[index+1])
    }
};

const prevImage = ()=>{
    const index = getCurrentImageIndex();
    if(index===0){
        changeImage(film.value.images[film.value.images.length-1])
    }
    else{
        changeImage(film.value.images[index-1])
    }
};


const buyTicket = () => {
	if (!store.getters.isAuth()) {
		router.push("/login");
	} else {
		loadShowings.value = true;
	}
};


// watching on value from event bus: when its changed we must load corresponding data
watch(() => bus.value.get("showing-time-selected"), ([showing]) => {
	selectedSeats.value = [];
	selectedShowing.value = showing;
});

watch(() => bus.value.get("showing-seats-selected"), ([seat]) => {
	const index = selectedSeats.value.findIndex(item => item.id === seat.id);
	if (index === -1) {
		selectedSeats.value.push(seat);
	} else {
		selectedSeats.value.splice(index, 1);
	}
});

// Fetching movie data from remote api
await request().get(`/films/${route.params.id}`)
	.then(data => {
		film.value = data;
		mainImage.value = data.images.length ? data.images[0] : {};
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});

</script>

<style scoped>
</style>