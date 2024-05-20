<template>
 <div>
 

 </div>
  
</template>

<script>

export default {
  name: 'App',
  components:{
    
   } ,

   data(){
    return {
      posts: [
      {
      id:25,
      postname:"Armothy",
      status:"Dead",
      species:"unknown",
      type:"Self-aware arm",
      gender:"Male",
      origin:{
        "name":"Post-Apocalyptic Earth",
        "url":"https://rickandmortyapi.com/  api/location/8"},
      location:{
        "name":"Post-Apocalyptic Earth",
        "url":"https://rickandmortyapi.com/api/loca tion/8"
      }, 
      image:"https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      episode:["https://rickandmortyapi.com/api/episode/23"],
      url:"https://rickandmortyapi.com/api/character/25",
      created:"2017-11-05T08:54:29.343Z"
    },
    {
      id:151,
      postname:"Gwendolyn",
      status:"unknown",
      species:"Robot",
      type:"Gazorpian reproduction robot",
      gender:"Female",
      origin:{
        "name":"Gazorpazorp",
        "url":"https://rickandmortyapi.com/api/location/40"},
      location:{
        "name":"Earth (Replacement Dimension)",
        "url":"https://rickandmortyapi.com/api/location/20"},
      image:"https://rickandmortyapi.com/api/character/avatar/151.jpeg",
      episode:["https://rickandmortyapi.com/api/episode/7"],
      url:"https://rickandmortyapi.com/api/character/151",
      created:"2017-12-29T12:31:50.388Z"
    },
    {
      id:183,
      postname:"Johnny Depp",
      status:"Alive",
      species:"Human",
      type:"",
      gender:"Male",
      origin:{
        "name":"Earth (C-500A)","url":"https://rickandmortyapi.com/api/location/23"},
      location:{
        "name":"Earth (C-500A)",
        "url":"https://rickandmortyapi.com/api/location/23"},
      image:"https://rickandmortyapi.com/api/character/avatar/183.jpeg",
      episode:["https://rickandmortyapi.com/api/episode/8"],
      url:"https://rickandmortyapi.com/api/character/183",
      created:"2017-12-29T18:51:29.693Z"
    },
    {
      id:290,
      postname:"Rick Sanchez",
      status:"Dead",
      species:"Human",
      type:"",
      gender:"Male",
      origin:{
        "name":"Earth (Evil Rick's Target Dimension)",
        "url":"https://rickandmortyapi.com/api/location/34"},
      location:{
        "name":"Earth (Evil Rick's Target Dimension)",
        "url":"https://rickandmortyapi.com/api/location/34"},
      image:"https://rickandmortyapi.com/api/character/avatar/290.jpeg",
      episode:["https://rickandmortyapi.com/api/episode/10"],
      url:"https://rickandmortyapi.com/api/character/290","created":"2017-12-31T20:15:25.716Z"
    },
    {
      id:690,
      postname:"Scarecrow Morty",
      status:"Dead",
      species:"Robot",
      type:"Decoy",
      gender:"Male",
      origin:{
        "name":"Earth (Replacement Dimension)",
        "url":"https://rickandmortyapi.com/api/location/20"},
      location:{
        "name":"Earth (Replacement Dimension)",
        "url":"https://rickandmortyapi.com/api/location/20"},
      image:"https://rickandmortyapi.com/api/character/avatar/690.jpeg",
      episode:["https://rickandmortyapi.com/api/episode/43"],
      url:"https://rickandmortyapi.com/api/character/690",
      created:"2021-10-16T15:22:35.204Z"
    },
    {
      id:785,
      postname:"Memory Geardude",
      status:"Dead",
      species:"Alien",
      type:"Memory",
      gender:"Male",
      origin:{
        "name":"Birdperson's Consciousness",
        "url":"https://rickandmortyapi.com/api/location/120"},
      location:{
        "name":"Birdperson's Consciousness",
        "url":"https://rickandmortyapi.com/api/location/120"},
      image:"https://rickandmortyapi.com/api/character/avatar/785.jpeg",
      episode:["https://rickandmortyapi.com/api/episode/49"],
      url:"https://rickandmortyapi.com/api/character/785","created":"2021-10-25T09:24:51.284Z"
    }
    ]}
   }
}
</script>

<style>

</style>
