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

    <Suspense>
        <template #default>
            <PopularList/>
        </template>
        <template #fallback>
            <LoadingSpinner/>
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <Latest/>
        </template>
        <template #fallback>
            <LoadingSpinner/>
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <HallList></HallList>
        </template>
        <template #fallback>
            <LoadingSpinner/>
        </template>
    </Suspense>
</template>

<script setup>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import PopularList from "@/components/films/PopularList.vue";
import Latest from "@/components/films/Latest.vue";
import HallList from "@/components/halls/HallList.vue";

</script>

<style scoped>

</style>