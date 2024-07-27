<script setup>
import HomeNew from "./components/HoneNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeProduct from "./components/HomeProduct.vue";

import { useBannerStore } from "@/stores/home";
import { onMounted } from "vue";
const Store = useBannerStore();
onMounted(() => {
    Store.getBanner(),
    Store.getNewList(),
    Store.getHotList(),
    Store.getGoodsList()
})
</script>

<template>
    <div class="container">
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>
</template>
