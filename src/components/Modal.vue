<template>
    <Transition name="modal">
        <div class="modal" v-if="props.visible">
            <div class="modal-wrapper" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <button class="modal-close-btn" type="button" role="button" @click="closeModal">&times;</button>
                    <slot/>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import {defineProps, defineEmits, watch} from "vue";

const props = defineProps({
	visible: Boolean,
});

watch(() => props.visible, () => {
	document.body.classList.toggle("scroll-lock", props.visible);
});

const emit = defineEmits(["close"]);
const closeModal = () => {
	emit("close");
};
</script>

<style scoped>
.image-viewer .modal-content{
    padding: 0;
    max-width: 70%;
    height: 70vh;
    width: 100%;
    min-height: 7em;
}

.modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    cursor: pointer;
    z-index: 1000;
}

.modal-content {
    max-width: 700px;
    width: 80%;
    min-height: 7em;
    text-align: center;
    border-radius: 5px;
    padding: 2.5em;
    background-color: var(--clr-bg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    cursor: auto;
}

.modal-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    outline: 0;
    background: 0;
    border: 0;
    font-size: 2.5em;
    line-height: 1em;
    width: 1em;
    border-radius: 5px;
    cursor: pointer;
}

.modal-close-btn:hover {
    color: var(--clr-primary);
}

/* modal animations */
.modal-enter-active,
.modal-leave-active{
    transition:all .25s;
    z-index: 1000;
}

.modal-enter-from,
.modal-leave-to{
    opacity: 0;
}

.modal-enter-to{
    opacity: 1;
}
</style>