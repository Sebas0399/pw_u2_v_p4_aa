<template>
  <div class="contendor-opciones">

 
    <ul>
      <li v-for="pokemon in opciones" :key="pokemon.id" @click="$emit('seleccionado',pokemon.id)">{{ pokemon.nombre }}</li>
      

    </ul>
  </div>
  </template>
  
  <script>
  export default {
   props:{
      opciones:{
        type:Array,
        required:true
      }
   }, 
   methods:{
    pruebaDeEvento(){
      console.log('prueba de envento')
    }
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