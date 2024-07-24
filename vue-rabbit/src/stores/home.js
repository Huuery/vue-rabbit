import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getBannerAPI } from "@/apis/Home";
import { findNewAPI } from "@/apis/Home";
import { getHotAPI } from "@/apis/Home"
export const useBannerStore = defineStore('home', () => {
    const BannerList = ref([]);
    const NewList = ref([]);
    const HotList = ref([]);
    const getBanner = async () => {
        const res = await getBannerAPI();
        BannerList.value = res.result;
    }
    const getNewList = async () => {
        const res = await findNewAPI();
        NewList.value = res.result;
    }
    const getHotList = async () => {
        const res = await getHotAPI();
        HotList.value = res.result;
    }
    return {
        getBanner,
        getNewList,
        getHotList,
        HotList,
        NewList,
        BannerList
    }
})
