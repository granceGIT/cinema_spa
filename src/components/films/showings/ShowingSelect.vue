<template>
    <div class="showing-select-block" v-if="props.showings.length">
        <h3 class="showing-select-title">Выберите сеанс: </h3>
        <div class="showing-select">
            <Card v-for="showing in props.showings" v-bind:key="showing.id" v-bind:showing="showing"/>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import Card from "@/components/films/showings/Card.vue";

const props = defineProps({
	showings: Array,
});


</script>

<style lang="scss" scoped>

</style>