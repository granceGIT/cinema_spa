<template>
    <div class="content">
        <Header></Header>
        <router-view v-slot="{ Component }">
            <Suspense timeout="0">
                <template #default>
                    <component :is="Component" :key="$route.path"/>
                </template>
                <template #fallback>
                    <LoadingSpinner/>
                </template>
            </Suspense>
        </router-view>
        <Alert></Alert>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Alert from "@/components/Alert.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

</script>

<style>
@import "@/assets/css/style.css";
</style>