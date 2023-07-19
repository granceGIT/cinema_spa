<template>
    <div class="summary" v-if="Object.keys(props.summary).length">
        <div class="selected-seats">Выбрано билетов: <span class="selected-seats-count">2</span></div>
        <div class="selected-tickets">Общая стоимость билетов: <span
                class="base-ticket-price price">500</span></div>
        <div class="ticket-types">
            <div class="form-group">
                <label for="child_tickets_count">Количество детских билетов:</label>
                <input type="number" id="child_tickets_count" name="child_tickets_count" required
                       max="2" min="0" placeholder="0">
            </div>
        </div>
        <div class="total-tickets">Итого: <span class="total-price price">500</span></div>
        <button class="btn btn-primary checkout-btn">Подтвердить</button>
    </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
	summary: Object,
});
</script>

<style lang="scss" scoped>

</style>