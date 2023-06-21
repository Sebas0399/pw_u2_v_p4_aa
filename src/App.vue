<template>
  <Contador titulo="Estudiante" v-bind:inicio="102"></Contador>
  <Contador titulo="Profesor" ></Contador>

</template>

<script>
import Calculadora from './components/Calculadora.vue';
import Contador from './components/Contador.vue';
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Calculadora,
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
