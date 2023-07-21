<template>
    <div class="showing-card">
        <div class="showing-card-date">
            {{ SQLDateToDate(props.showing.date) }}
        </div>
        <div class="showing-card-time">
            <div class="showing-time-card" v-for="time in props.showing.times" :key="time.id"
                 :class="{active:time.id===props.selectedID}"
                 @click="selectTime({...time,date:props.showing.date})">{{ time.time }}
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import {SQLDateToDate} from "@/utils";
import useEventBus from "@/composable/eventBus";


const props = defineProps({
	showing: Object,
	selectedID: Number,
});

const {emit} = useEventBus();

const selectTime = (timeCard) => {
	emit("showing-time-selected", timeCard);
};

</script>

<style lang="scss" scoped>

</style>