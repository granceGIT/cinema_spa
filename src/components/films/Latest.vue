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
                    {{
                    film.description
                    }}
                </p>
                <span class="film-price price">от {{ film.min_price }}</span>
                <div class="film-manage">
                    <router-link :to="'/films/'+film.id" class="btn btn-primary">Подробнее</router-link>
                </div>
            </div>

            <!-- ... -->
        </div>
        <div class="latest-images">
            <div class="image-block" v-for="image in film.images" v-bind:key="image.id">
                <img :src="image.image" :alt="film.name + 'image' + image.id" class="img-cover">
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import store from "@/store";
import request from "@/http";

const film = ref({});

await request().get("/films/latest")
	.then(data => {
		film.value = data;
	})
	.catch(e => {
		store.mutations.showAlert(e.message);
	});
</script>

<style lang="scss" scoped>

</style>