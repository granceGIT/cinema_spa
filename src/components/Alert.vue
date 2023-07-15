<template>
    <div class="alert" :class="store.state.alert.type" v-if="store.getters.isAlert()">
        {{ store.state.alert.text }}
        <button class="btn-close" @click="hide">&times;</button>
    </div>
</template>

<script setup>
import store from "@/store";

const hide = () => {
    store.mutations.hideAlert()
}
</script>

<style>
.alert {
    position: fixed;
    z-index: 10000;
    min-height: 80px;
    min-width: 35ch;
    max-width: 60ch;
    bottom: 5%;
    right: 1%;
    background-color: #6db777;
    border-radius: 3px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2em;
    animation: opacity .4s both, slideInRight .4s both;
}

@keyframes opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(50%);
    }
    to {
        transform: translateX(0);
    }
}

.alert .btn-close {
    position: absolute;
    right: 2%;
    top: 2%;
    display: block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    font-size: 2em;
    padding: 0;
    margin: 0;
    line-height: 0.8em;
    border-radius: 3px;

}

.alert.error {
    background-color: #b91919;
}
</style>