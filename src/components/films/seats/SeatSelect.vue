<template>
    <div class="showing-select-block" v-if="props.seats.length">
        <div class="legend">
            <div class="child-ticket bg-primary">Занято</div>
            <div class="child-ticket bg-alt">Эконом: <span class="price">220</span></div>
            <div class="child-ticket ">Детский: <span class="price">199</span></div>
            <div class="adult-ticket">Взрослый: <span class="price">250</span></div>
        </div>
        <h3 class="showing-select-title">Выберите места: </h3>
        <div class="seat-select" v-if="props.seats.length===0">
            <div class="screen-visually">
                Экран
            </div>
            <Row v-for="i in [{id:1},{id:2},{id:3},{id:4},{id:5}]" v-bind:key="i" v-bind:row="i"/>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import Row from "@/components/films/seats/Row.vue";

const props = defineProps({
	seats: Array,
});
</script>

<style lang="scss" scoped>

</style>