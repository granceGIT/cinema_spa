<template>
    <div class="order-contents">
        <div class="order-card">
            <div class="order-card-film">
                <div class="order-card-film-img">
                    <img v-if="props.order.showing.film.images.length"
                         :src="props.order.showing.film.images[0].image"
                         :alt="props.order.showing.film.name + 'poster'"
                         class="img-cover">
                    <img v-else src="@/assets/images/no-image.jpg" alt="изображение отсутствует" class="img-cover">
                </div>
                <div class="order-card-film-info">
                    <h2 class="order-card-film-title"><a :href="'/films/'+props.order.showing.film.id"
                                                         class="film-title-link">{{ props.order.showing.film.name }}</a>
                    </h2>
                    <div class="order-card-film-genres text-muted">
                        {{ props.order.showing.film.genres.map(genre => genre.name).join(", ") }}
                    </div>
                    <div class="order-card-film-restrictions text-muted">{{
                        props.order.showing.film.age_restriction
                        }}+
                    </div>
                </div>
            </div>
            <div class="order-card-ticket">
                <div><span class="text-muted">Билетов: </span>
                    {{ props.order.tickets_count }}
                </div>
            </div>
            <div class="order-card-date">
                <div><span class="text-muted">Дата: </span>
                    {{ SQLDateToDate(props.order.showing.date) }}
                </div>
                <div><span class="text-muted">Стоимость: </span>
                    <span class="price">{{ props.order.price }}</span>
                </div>
            </div>
            <div class="order-card-rate" v-if="props.order.film_rate">
                <span class="text-rating">{{ props.order.film_rate }}/10</span>
                <span class="edit-rate text-muted" @click="rateFilm(props.order.showing.film,props.order.film_rate)">Изменить</span>
            </div>
            <div class="order-card-rate" v-else>
                <button class="btn btn-primary" @click="rateFilm(props.order.showing.film)">Оценить</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import {defineProps, defineEmits} from "vue";
import {SQLDateToDate} from "@/utils";

const props = defineProps({
	order: Object,
});

const emit = defineEmits(["rate"]);

const rateFilm = (film, rating = 0) => {
	if (rating) {
		film.rate = rating;
	}
	emit("rate", film);
};
</script>

<style scoped>

</style>