<template>
  
  <PokemonPage />



</template>

<script>
import Calculadora from './components/Calculadora.vue';
import Contador from './components/Contador.vue';
import CaracolaMagica from './components/CaracolaMagica.vue';
import PokemonPage from "./modules/pokemon/pages/PokemonPages.vue"
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Calculadora,
    Contador,
    CaracolaMagica,
    PokemonPage
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
