<template>
    <Card v-for="film in props.films" v-bind:key="film.id" v-bind:film="film"/>
</template>

<script setup>
import Card from "@/components/films/Card.vue";
import {defineProps} from 'vue';

const props = defineProps({
    films: Array,
})

</script>

<style scoped>

</style>