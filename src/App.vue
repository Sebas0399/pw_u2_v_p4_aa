<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Contador titulo="Estudiate " valor=0></Contador>
  <Contador titulo="Profesor " valor="10"></Contador>
  <Contador titulo="Test " valor="10"></Contador>
  
</template>

<script>
import Contador from './components/Contador.vue';
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Contador
  }
 ,
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
