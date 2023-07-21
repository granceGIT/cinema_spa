<template>
    <div class="rating-container">
        <div class="star" v-for="(item,index) in props.rates" :key="index" @click="rate(index+1)"
             :class="{selected:index+1<=props.selected}">{{ index + 1 }}
        </div>
    </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
	rates: Array || Number,
	selected: Number,
});

const emit = defineEmits(["selected"]);

const rate = (rating) => {
	emit("selected", rating);
};
</script>

<style scoped>
.rating-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 40px 0 20px;
    pointer-events: none;
    padding: 0;
}

.star {
    width: 50px;
    height: 50px;
    background-color: var(--clr-grey);
    border-radius: 3px;
    pointer-events: all;
    transition: all .4s;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    border: 1px solid transparent;
}

.rating-container:hover .star:not(.selected) {
    border-color: #e8ba09;
    color: #e8ba09;
}

.rating-container .star:hover ~ .star {
    border-color: transparent;
    color: var(--clr-text);
}

.star.selected {
    background-color: #e8ba09;
    border-color: transparent;
    color: var(--clr-text);
}

.rating-container .star:hover ~ .star {
    border-color: transparent;
    color: var(--clr-text);
}
</style>