<template>
    <div class="order-ticket-card">
        <div class="ticket-code">
            <span class="text-muted">Билет: </span>{{ props.ticket.id }}
        </div>
        <div class="ticket-seat">
            <div><span class="text-muted">Ряд: </span>{{ props.ticket.seat_row }}</div>
            <div><span class="text-muted">Место: </span>{{ props.ticket.seat_number }}</div>
        </div>
        <div class="ticket-seat-type">
            <span class="text-muted">Тип: </span>{{ props.ticket.seat_type }}
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
	ticket: Object,
});
</script>

<style scoped>

</style>