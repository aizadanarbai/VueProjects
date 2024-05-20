<template>
   <div>
    <li>
        {{ post.image }}
    </li>
    <li>
        {{ post. postname}}
        {{ post.status }}
        {{ post.species }}
        {{ post.type }}
        {{ post.gender }}
    </li>
   </div>
</template>

<script>
export default {
    name:"PostItem",
    props:["post"]
}

</script>

<style scoped>
</style>