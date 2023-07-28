<template>
    <div class="hall-card">
        <img v-if="props.hall.images.length" :src="props.hall.images[0].image" :alt="'изображение ' + props.hall.name"
             class="img-cover">
        <img v-else src="@/assets/images/no-image.jpg" alt="изображение отсутствует" class="img-cover">
        <h3 class="hall-card-title">{{ props.hall.name }}</h3>
    </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
    hall:Object,
})
</script>

<style lang="scss" scoped>

</style>