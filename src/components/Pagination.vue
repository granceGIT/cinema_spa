<template>
    <div class="pagination-wrapper">
        <ul class="pagination" v-if="props.pages>1">
            <li v-for="page in props.pages" :key="page"
                class="pagination-box"
                :class="{active:page===props.currentPage}"
                @click="handleSelect(page)"
            >{{ page }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
	pages: Number,
	currentPage: Number,
});

const emit = defineEmits(["selected"]);

const handleSelect = (page) => {
	emit("selected", page);
};
</script>

<style scoped>
.pagination-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 5em 0;
}

.pagination {
    display: flex;
    gap: 5px;
}

.pagination-box {
    display: block;
    width: max-content;
    min-height: 1em;
    line-height: 1em;
    font-size: 1em;
    border-radius: 3px;
    text-align: center;
    padding: 1em;
    background-color: var(--clr-grey);
    color: var(--clr-muted);
    cursor: pointer;
}

.pagination-box:not(.active):hover {
    color: var(--clr-text);
}

.pagination-box.active {
    background-color: var(--clr-text);
    color: var(--clr-bg);
}
</style>