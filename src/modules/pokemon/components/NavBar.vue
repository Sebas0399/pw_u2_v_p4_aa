<template>
    <div>
      <router-link to="/">Bienvenida</router-link >
      <router-link  to="/juego">Juego</router-link >
      <router-link  to="/premios">Premios</router-link >
      <router-link  to="/pokemon">Pokemon</router-link >
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  div{
      padding: 0 30px;
  }
  div a{
      font-weight: bold;
      color: rgb(228, 168, 141);
      margin: 0 10px;
  }
  </style>