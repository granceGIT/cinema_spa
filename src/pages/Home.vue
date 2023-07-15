<template>
    <section class="hero ">
        <div class="container">
            <div class="hero-image">
                <div class="hero-body">
                    <h2 class="film-title">Незнакомец</h2>
                    <div class="film-details">
                        <span class="film-rating">8.9</span>
                        <span class="film-created">2020, США</span>
                        <span class="film-genres">Триллер, драма</span>
                        <span class="film-duration">113 мин</span>
                        <span class="film-restrictions">18+</span>
                    </div>
                    <p class="film-description">
                        Софи была счастлива в браке со своим мужем Генри. Пока однажды ей не пришло анонимное письмо,
                        предупреждение, что ей нужно бежать от мужа. Пытаясь разгадать эту загадку, Софи впадает в ужас,
                        ведь Генри оказывается совсем не тем человеком, которого она знает…
                    </p>
                    <div class="film-manage">
                        <router-link to="/films/1" class="btn btn-primary">Купить билет</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="popular section">
        <div class="container">
            <h2 class="section-title">
                Популярные за неделю
            </h2>
            <div class="popular-body">

                <Suspense>
                    <template #default>
                        <PopularList/>
                    </template>
                    <template #fallback>
                        <LoadingSpinner/>
                    </template>
                </Suspense>
            </div>
        </div>
    </section>

    <section class="latest section">
        <div class="container">
            <h2 class="section-title">
                Новинка
            </h2>
            <Suspense>
                <template #default>
                    <Latest/>
                </template>
                <template #fallback>
                    <LoadingSpinner/>
                </template>
            </Suspense>
        </div>
    </section>

    <section class="halls section">
        <div class="container">
            <h2 class="section-title">Залы</h2>
            <div class="halls-body">
                <div v-for="hall in halls" :key="hall.id" class="hall-card">
                    <img :src="hall.images[0].image" :alt="'изображение ' + hall.name" class="img-cover">
                    <h3 class="hall-card-title">{{ hall.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import request from "@/http";
import store from "@/store";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import PopularList from "@/components/films/PopularList.vue";
import Latest from "@/components/films/Latest.vue";

const halls = ref([])

onMounted(() => {
    request().get('/halls')
        .then(data => {
            halls.value = data
        })
        .catch(error => {
            store.mutations.showAlert(error)
        })
})
</script>

<style scoped>

</style>