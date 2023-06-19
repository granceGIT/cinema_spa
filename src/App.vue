<template>
    <div class="content">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {Footer, Header}

}
</script>

<style>
@import "@/assets/css/style.css";
</style>