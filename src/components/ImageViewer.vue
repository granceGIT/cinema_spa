<template>
    <Modal :visible="props.visible" @close="closeImageViewer" :class="'image-viewer'">
        <div class="control-prev" @click="prevImage">Пред</div>
        <img :src="currentImage.image" :alt="'image ' + currentImage.id" class="img-cover">
        <div class="control-next" @click="nextImage">След</div>
    </Modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import {defineProps, defineEmits, ref} from "vue";

const props = defineProps({
	visible: {
		type: Boolean,
		default: false,
	},
	images: Array,
	selectedImage: Object,
});

const currentImage = ref(props.selectedImage)

const emit = defineEmits(["close"]);

const closeImageViewer = () => {
	emit("close");
};

const getCurrentImageIndex = () => {
	return props.images.findIndex(image => image.id === currentImage.value.id);
};

const nextImage = () => {
	const index = getCurrentImageIndex();
	if (index === props.images.length - 1) {
		currentImage.value = props.images[0];
	} else {
      currentImage.value = props.images[index + 1];
	}
};

const prevImage = () => {
	const index = getCurrentImageIndex();
	if (index === 0) {
      currentImage.value = props.images[props.images.length - 1];
	} else {
      currentImage.value = props.images[index - 1];
	}
};
</script>

<style scoped>
.image-viewer img {
    aspect-ratio: 16/9;
}

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