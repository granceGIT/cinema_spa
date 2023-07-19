<template>
    <div class="seat-row">
        <span class="row-number">Ряд {{ props.row.id}}</span>
        <div class="seat-number economy">1</div>
        <div class="seat-number economy">2</div>
        <div class="seat-number economy">3</div>
        <div class="seat-number economy">4</div>
        <div class="seat-number economy">5</div>
        <div class="seat-number economy">6</div>
        <div class="seat-number economy">7</div>
        <div class="seat-number economy">8</div>
        <div class="seat-number economy">9</div>
        <div class="seat-number economy">10</div>
        <div class="seat-number economy disabled">11</div>
        <div class="seat-number economy">12</div>
        <div class="seat-number economy selected">13</div>
        <div class="seat-number economy">14</div>
        <div class="seat-number economy">15</div>
        <div class="seat-number economy">16</div>
        <div class="seat-number economy">17</div>
        <div class="seat-number economy">18</div>
        <span class="row-number">Ряд 1</span>
    </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
    row:Object,
})
</script>

<style lang="scss" scoped>

</style>