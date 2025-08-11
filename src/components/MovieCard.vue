<script setup>
defineProps({
    movie:Object,
    bg_color:{
        default:''
    },
    titleColor:{
        default:''
    },
    hideDesc:{
        default:false
    }
})

</script>
<template>
    <van-card
        :centered=true
        :title="movie.title"
        :thumb="movie.image"
        :style="{backgroundColor:bg_color,borderRadius:'15px',color:titleColor}"
      >
        <template #desc>
            <div class="desc">
                <span v-if="movie.description || hideDesc " style="font-size: 0.75rem">{{movie.description}}</span>
                <span style="font-size: 0.75rem; color: gray;">{{movie.date}}</span>
        </div>
        </template>
      </van-card>
</template>

<style scoped>
.desc{
    display:flex;
    flex-direction: column;
}

.van-card :deep(span){
    margin-top:10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.van-card{
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    --van-card-thumb-size:5rem;
}



</style>