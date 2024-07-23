import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getBannerAPI } from "@/apis/Home";
export const useBannerStore = defineStore('banner', () => {
    const BannerList = ref([]);
    const getBanner = async () => {
        const res = await getBannerAPI();
        BannerList.value = res.result;
    }
    return{
        getBanner,
        BannerList
    }
})
