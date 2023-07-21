<template>
    <div class="seat-row">
        <span class="row-number">Ряд {{ props.row.row }}</span>
        <div class="seat-number"
             v-for="seat in props.row.seats"
             :key="seat.id"
             :class="{
                 disabled:seat.is_occupied,
                 economy:seat.type==='Эконом',
                 selected:props.selected.length && props.selected.includes(seat.id)
             }"
             @click="selectSeat(seat)"
        >{{ seat.number }}
        </div>

        <span class="row-number">Ряд {{ props.row.row }}</span>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import useEventBus from "@/composable/eventBus";

const props = defineProps({
	row: Object,
	selected: Array,
});

const {emit} = useEventBus();

const selectSeat = (seat) => {
	if (!seat.is_occupied) {
		emit("showing-seats-selected", seat);
	}
};
</script>

<style lang="scss" scoped>

</style>