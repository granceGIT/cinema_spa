<template>
    <div class="latest-body">
        <div class="latest-info">
            <div class="film-info">
                <h2 class="film-title">{{ film.name }}</h2>
                <div class="film-details">
                    <span class="film-rating" v-if="film.rating">{{ film.rating }}</span>
                    <span class="film-created">{{ film.release_date }}, {{ film.country }}</span>
                    <span class="film-genres">{{ film.genres.map(item => item.name).join(", ") }}</span>
                    <span class="film-duration">{{ film.duration }} мин</span>
                    <span class="film-restrictions">{{ film.age_restriction }}+</span>
                </div>
                <p class="film-description">
                    {{ film.description }}
                </p>
                <span class="film-price price" v-if="film.min_price">от {{ film.min_price }}</span>
                <span class="text-muted" v-else>Сеансы не найдены</span>
                <div class="film-manage">
                    <router-link :to="'/films/'+film.id" class="btn btn-primary">Подробнее</router-link>
                </div>
            </div>

            <!-- ... -->
        </div>
        <div class="latest-images">
            <div class="image-block" v-for="image in film.images" :key="image.id">
                <img :src="image.image" :alt="film.name + 'image' + image.id" class="img-cover" @click="()=>{
                    imageViewerVisible=true;
                    mainImage = image;
                }">
            </div>
        </div>
        <ImageViewer @close="imageViewerVisible=false" :visible="imageViewerVisible" :current-image="mainImage"
                     @next="nextImage" @prev="prevImage"></ImageViewer>
    </div>
</template>

<script setup>
import {ref} from "vue";
import store from "@/store";
import request from "@/http";
import ImageViewer from "@/components/ImageViewer.vue";

const film = ref({});
const mainImage = ref({});
const imageViewerVisible = ref(false);

const changeImage = (value) => {
	mainImage.value = value;
};

const getCurrentImageIndex = () => {
	return film.value.images.findIndex(image => image.id === mainImage.value.id);
};

const nextImage = () => {
	const index = getCurrentImageIndex();
	if (index === film.value.images.length - 1) {
		changeImage(film.value.images[0]);
	} else {
		changeImage(film.value.images[index + 1]);
	}
};

const prevImage = () => {
	const index = getCurrentImageIndex();
	if (index === 0) {
		changeImage(film.value.images[film.value.images.length - 1]);
	} else {
		changeImage(film.value.images[index - 1]);
	}
};

await request().get("/films/latest")
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