<template>
    <h1>Rate cats</h1>
    <img v-if="imagen !== ''" :src="imagen" alt="No se puede mostrar" />
    <div class="db-dark"></div>
    <div class="container">
  
      <div>
        <button class="btn-like" v-on:click="consumirApi()">Like</button>   
        <button class="btn-unlike" v-on:click="consumirApi()">Dislike</button>   

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
       
        imagen: "https://cdn2.thecatapi.com/images/bo8.jpg",
       
      };
    },
    methods: {
      async consumirApi() {
        const r = await fetch("https://api.thecatapi.com/v1/images/search").then(
          (response) => response.json()
        );
        this.imagen = r[0].url;
       
      }
    },
    
    
  };
  </script>
  
  <style>
  .container {
    flex-direction: column;
    position: relative;
  }
  
  img,
  .db-dark {
    height: 100vh;
    width: 100vw;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    
  }
  .db-dark {
    background-color: rgba(0, 0, 0, 0.4);
  }
  input{
    width: 250px;
    padding: 10px,15px;
    border-radius: 5px;
    border: none;
  }
  h2{
    color: white;
    font-size: 50px;
  }
  button{
    width: 100px;
    height: 50px;
    margin: 100px 0px 0px 100px;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 500px;
    border-radius: 5px;
  }
  .btn-unlike{
    background-color: red;
    
  }
  .btn-like{
    background-color: green;
  }
  </style>
  