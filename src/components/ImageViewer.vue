<template>
    <Modal :visible="props.visible" @close="closeImageViewer" :class="'image-viewer'">
        <div class="control-prev" @click="prevImage">PREV</div>
        <img :src="props.currentImage.image" :alt="props.currentImage" class="img-cover">
        <div class="control-next" @click="nextImage">NEXT</div>
    </Modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import {defineProps,defineEmits} from "vue";

const props = defineProps({
	visible: {
		type: Boolean,
		default: false,
	},
	currentImage: Object,
});

const emit = defineEmits(["close"]);

const closeImageViewer = () => {
	emit("close");
};

const nextImage = () => {
	emit("next");
};

const prevImage = () => {
	emit("prev");
};
</script>

<style scoped>
.control-prev,
.control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.4em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1em;
    transition: all .4s;
    border-radius: 3px;
    user-select: none;
}

.control-next:hover,
.control-prev:hover {
    background-color: rgba(255, 255, 255, .1);
}

.control-prev {
    left: -10%;
}

.control-next {
    right: -10%;
}
</style>