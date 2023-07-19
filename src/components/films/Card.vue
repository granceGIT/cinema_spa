<template>
    <router-link :to="{name:'movie',params:{id:props.film.id}}" class="showing-card">
        <div class="showing-card-img">
            <img :src="props.film.images[0].image" alt="Под водой постер" class="img-cover">
        </div>
        <h3 class="showing-card-title">
            {{ props.film.name }}
        </h3>
        <div class="showing-card-rating">
            {{ props.film.rating }}&nbsp;
        </div>
        <div class="showing-card-genres">
            {{ props.film.genres.map(item => item.name).join(", ") }}
        </div>
    </router-link>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
	film: Object,
});
</script>

<style scoped>

</style>