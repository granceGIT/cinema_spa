<template>

        <Suspense>
            <template #default>
                <ClosestSlider />
            </template>
            <template #fallback>
                <LoadingSpinner />
            </template>
        </Suspense>


    <Suspense>
        <template #default>
            <PopularList/>
        </template>
        <template #fallback>
            <LoadingSpinner/>
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <Latest/>
        </template>
        <template #fallback>
            <LoadingSpinner/>
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <HallList></HallList>
        </template>
        <template #fallback>
            <LoadingSpinner/>
        </template>
    </Suspense>
</template>

<script setup>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import PopularList from "@/components/films/PopularList.vue";
import Latest from "@/components/films/Latest.vue";
import HallList from "@/components/halls/HallList.vue";
import ClosestSlider from "@/components/films/ClosestSlider.vue";

</script>

<style scoped>

</style>