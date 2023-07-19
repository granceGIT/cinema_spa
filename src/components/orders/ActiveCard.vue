<template>
    <div class="order-contents">
        <div class="order-card">
            <div class="order-card-film">
                <div class="order-card-film-img"><img :src="props.order.showing.film.images[0].image" alt="film name"
                                                      class="img-cover"></div>
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
                <div><span class="text-muted">Детских: </span>
                    {{ props.order.tickets_children_count }}
                </div>
            </div>
            <div class="order-card-hall">
                <div><span class="text-muted">Зал: </span>
                    {{ props.order.showing.hall }}
                </div>
            </div>
            <div class="order-card-date">
                <div><span class="text-muted">Дата: </span>
                    {{ SQLDateToDate(props.order.showing.date) }}
                </div>
                <div><span class="text-muted">Начало в: </span>
                    {{ props.order.showing.start_time }}
                </div>
            </div>
        </div>
        <div class="order-tickets">
            <Card v-for="ticket in props.order.tickets" v-bind:key="ticket.id" v-bind:ticket="ticket"/>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import {SQLDateToDate} from "@/utils";
import Card from "@/components/orders/tickets/Card.vue";

const props = defineProps({
	order: Object,
});


</script>

<style scoped>

</style>