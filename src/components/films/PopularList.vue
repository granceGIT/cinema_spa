<template>
    <PopularCard v-for="film in films" v-bind:key="film.id" :film="film"/>
</template>

<script setup>

import {ref} from "vue";
import request from "@/http";
import store from "@/store";
import PopularCard from "@/components/films/PopularCard.vue";

const films = ref([])

await request().get('/films/popular')
    .then(data=>{
        films.value = data
    })
    .catch(e=>{
        store.mutations.showAlert(e.message)
    })
</script>

<style lang="scss" scoped>

</style>