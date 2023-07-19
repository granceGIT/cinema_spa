<template>
    <router-link :to="'/films/'+props.film.id" class="popular-card">
        <div class="popular-card-img">
            <img :src="props.film.images.length && props.film.images[0].image" :alt="props.film.name + 'постер'"
                 class="img-cover">
        </div>
        <h3 class="popular-card-title">
            {{ props.film.name }}
        </h3>
        <div class="popular-card-genres">
            {{ props.film.genres.map(item => item.name).join(", ") }}
        </div>
    </router-link>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({film: Object});
</script>

<style lang="scss" scoped>

</style>