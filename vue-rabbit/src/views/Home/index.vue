<script setup>
import HomeNew from "./components/HoneNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeProduct from "./components/HomeProduct.vue";

import HomePanel from "./components/HomePanel.vue";

import { useBannerStore } from "@/stores/banner";
import { onMounted } from "vue";
const bannerStore = useBannerStore();
onMounted(() => bannerStore.getBanner())
</script>

<template>
    <div class="container">
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>
    <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
        <div>
            我是新鲜好物
        </div>
    </HomePanel>
    <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
        <div>
            我是人气推荐
        </div>
    </HomePanel>
</template>
