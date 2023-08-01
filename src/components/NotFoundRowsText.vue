<template>
    <div class="rows-not-found-text text-muted">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.rows-not-found-text{
    display: flex;
    align-items: center;
    min-height: inherit;
    justify-content: center;
    text-align: center;
    font-size: 1.2em;
}
</style>