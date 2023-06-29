<template>
  <div class="contendor-opciones">

 
    <ul>
      <li>1</li>
      <li v-on:click="cambiar">2</li>
      <li>3</li>
      <li>4</li>

    </ul>
  </div>
  </template>
  
  <script>
  export default {
    props:{
      estado:{
        type:Boolean,
        required:true
      }
    },
    methods:{
      
    }
  }
  </script>
  
  <style scoped>
  ul{
    list-style: none;
  }
  li{
    border: 1px solid black;
    border-radius: 5px;
    background-color: azure;
    margin-bottom: 10px;
    width: 200px;
    cursor: pointer;
  }
  li:hover{
    background-color: aquamarine;
  }
  .contendor-opciones{
    display: flex;
    justify-content: center;
  }
  </style>