<template>
    <div class="slider-wrapper" v-if="props.slides.length">
        <div class="slider">
            <div v-for="(slide,index) in props.slides"
                 :key="index"
                 :class="{active:activeSlideIndex===index}"
                 class="slide"
            >
                <slot name="slide" v-bind="{slide}"/>
            </div>
        </div>
        <div class="slider-controls">
            <button class="slider-control slider-control-prev" @click="prevSlide">
                <span class="visually-hidden">Предыдущий</span>
                <span class="slider-control-icon">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#fff'>
                        <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/>
                    </svg>
                </span>
            </button>
            <button class="slider-control slider-control-next" @click="nextSlide">
                <span class="visually-hidden">Следующий</span>
                <span class="slider-control-icon">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#fff'>
                        <path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
	slides: Array,
	activeIndex: {
		type: Number,
		default: 0,
	},
});

const activeSlideIndex = ref(props.activeIndex);

const nextSlide = () => {
	if (activeSlideIndex.value === props.slides.length-1) {
		activeSlideIndex.value = 0;
	} else {
		activeSlideIndex.value++;
	}
};

const prevSlide = () => {
	if (activeSlideIndex.value === 0) {
		activeSlideIndex.value = props.slides.length-1;
	} else {
		activeSlideIndex.value--;
	}
};
</script>

<style scoped>
.slider-wrapper {
    position: relative;
    height: 600px;
}

.slider {
    position: relative;
    width: 90%;
    margin: 50px auto;
    height: 100%;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all .4s;
    z-index: -1;
}

.slide.active {
    opacity: 1;
    z-index: 1;
}

.slider-controls {
    z-index: -1;
    width: 100%;
}

.slider-control {
    position: absolute;
    height: 100%;
    width: 4em;
    cursor: pointer;
    outline: 0;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    z-index: 1;
    line-height: 0;
    transition: all .2s;
}

.slider-control:hover {
    opacity: .7;
}

.slider-control-prev {
    left: 0;
}

.slider-control-next {
    right: 0;
}

.slider-control-icon {
    width: 4em;
    height: 4em;
    display: block;
}
</style>