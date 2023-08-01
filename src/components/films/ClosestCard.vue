<template>
    <div class="closest-body">
        <div class="film-info">
            <h2 class="film-title">{{ props.film.name }}</h2>
            <div class="film-details">
                <span class="film-rating" v-if="props.film.rating">{{ props.film.rating }}</span>
                <span class="film-created">{{ props.film.release_date }}, {{ props.film.country }}</span>
                <span class="film-genres">{{ props.film.genres.map(item=>item.name).join(', ') }}</span>
                <span class="film-duration">{{ props.film.duration }} мин</span>
                <span class="film-restrictions">{{ props.film.age_restriction }}+</span>
            </div>
            <p class="film-description">
                {{ props.film.description }}
            </p>
            <div class="film-showing">
                <div class="film-showing-date text-muted">Дата: {{ SQLDateToDate(props.film.showing_date) }}</div>
                <div class="film-showing-time text-muted">Начало в: {{ props.film.showing_time }}</div>
            </div>
            <div class="film-manage">
                <router-link :to="'/films/'+props.film.id" class="btn btn-primary">Подробнее</router-link>
            </div>
        </div>
        <div class="latest-images">
            <div class="image-block">
                <img v-if="props.film.images.length" :src="props.film.images[0].image" :alt="props.film.name + 'постер'"
                     class="img-cover">
                <img v-else src="@/assets/images/no-image.jpg" alt="изображение отсутствует" class="img-cover">
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import {SQLDateToDate} from "@/utils";

const props = defineProps({
	film: Object,
});

</script>

<style scoped>
.closest-body{
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 30px;
}

.film-info{
    display: flex;
    height: 100%;
    flex-direction: column;
}

.film-info .film-description{
    margin: 30px 0;
}

.film-info .film-showing{
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.film-info .film-showing-date{
    font-size: 1.6em;
}

.film-info .film-showing-time{
    font-size: 1.3em;
}
</style>