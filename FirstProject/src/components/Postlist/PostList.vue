<template>
    <div>
    <ul>
        <post-item
         v-bind:key="post.id" 
         v-for="post, in posts" v-bind:post="post"/>
    </ul>
    </div>
</template>

<script>
import PostItem from '../PostItem/PostItem.vue';
export default {
name:"PostList",
components:{
    PostItem
},
props:["posts"]
}
</script>



<style scoped>

</style>