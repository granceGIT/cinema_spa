<template>
    <div class="slider-wrapper">
        <div class="slider" ref="slider" @mousemove="dragging" @mousedown="dragStart" @mouseup="dragStop"
             @mouseout="dragStop">
            <div v-for="slide in props.slides" :key="slide.id" ref="slides" class="slide" @click="imageSelected(slide)"
                 :class="props.slideClass">
                <img :src="slide.image" :alt="'image '+slide.id" class="img-cover">
            </div>
        </div>
        <div class="slider-controls">
            <button class="slider-control slider-control-prev" @click="prevSlide">
                <span class="visually-hidden">Предыдущий</span>
            </button>
            <button class="slider-control slider-control-next" @click="nextSlide">
                <span class="visually-hidden">Следующий</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import {defineProps, defineEmits, onMounted, ref} from "vue";

const emit = defineEmits(["selected"]);

const props = defineProps({
	slides: Array,
	slideClass: String,
});

const slides = ref([]);
const slider = ref(null);
let slideWidth;


onMounted(() => {
	slideWidth = slides.value[0].clientWidth + 5;
});

let isDragging = false, currentX, currentScroll;

const dragStart = e => {
	isDragging = true;
	currentX = e.pageX;
	currentScroll = slider.value.scrollLeft;
};

const dragging = e => {
	if (!isDragging) return;
	e.preventDefault();
	slider.value.classList.add("dragging");
	let positionDiff = e.pageX - currentX;
	slider.value.scrollLeft = currentScroll - positionDiff;
};

const dragStop = () => {
	isDragging = false;
	slider.value.classList.remove("dragging");
};

const prevSlide = () => {
	slider.value.scrollLeft -= slideWidth;
};

const nextSlide = () => {
	slider.value.scrollLeft += slideWidth;
};

const imageSelected = (slide) => {
	emit("selected", slide);
};

</script>

<style scoped>
.slider-wrapper {
    position: relative;
    grid-column: span 2;
}

.slider {
    white-space: nowrap;
    overflow: hidden;
    scroll-behavior: smooth;
    cursor: grab;
    font-size: 0;
}

.slider.dragging {
    scroll-behavior: auto;
    cursor: grabbing;
}

.slide {
    margin-left: 5px;
    width: calc(100% / 3.3);
    height: 120px;
    display: inline-block;
}

.slide img {
    pointer-events: none;
    user-select: none;
}

.slider-control {
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid transparent;
    opacity: .7;
    font-size: 1.2em;
    width: 2em;
    height: 2em;
    transition: all .4s ease;
    background-color: transparent;
    pointer-events: all;
}

.slider-control:hover {
    opacity: 1;
}

.slider-controls {
    position: absolute;
    width: 100%;
    pointer-events: none;
    z-index: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.slider-control-prev {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.slider-control-next {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

</style>