<script setup>
import {ref} from 'vue'
import { moviePoster4 } from '../assets/images';
const active=ref(0)
</script>
<template>
    <div>
        <div class="tabTitles">
            <van-tabs v-model:active="active" class="titleTab">
                <van-tab title="正在热映"/>
                <van-tab title="影院推荐"/>
            </van-tabs>
            <div class="moreTab">
                更多 >
            </div>
        </div>

        <div v-if="active === 0" class="title-content">
           <van-image
                height="12rem"
                :src="moviePoster4"
                radius="8"
           />
        </div>
        <div v-else class="title-content">
            page 2
        </div>
    </div>
</template>

<style scoped>
.tabTitles{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.titleTab :deep(.van-tab){
    margin-right:20px;
}

.title-content{
    padding-top:1rem;
}
</style>