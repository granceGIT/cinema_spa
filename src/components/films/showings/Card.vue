<template>
    <div class="showing-card">
        <div class="showing-card-date active">
            {{ SQLDateToDate(props.showing.date) }}
        </div>
        <div class="showing-card-time">
            <div class="showing-time-card" v-for="time in props.showing.times" v-bind:key="time.id"
                 @click="(e)=>selectTime(e,time.id)">{{ time.time }}
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue"
import {SQLDateToDate} from "@/utils";
import useEventBus from "@/composable/eventBus"


const props = defineProps({
    showing: Object,
})

const {emit} = useEventBus();

const selectTime = (e, id) => {
    e.target.classList.toggle('active')
    emit('showing-time-selected', id)
}

</script>

<style lang="scss" scoped>

</style>