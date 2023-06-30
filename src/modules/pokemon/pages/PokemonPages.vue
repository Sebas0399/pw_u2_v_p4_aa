<template>
  <h1>Juego Pokemon</h1>
  <div class="container-game">
    <PokemonImg :pokemonId="1" :muestraPokemon="false" />
    
  </div>

  <PokemonOps :opciones="arr"/>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI"

export default {
  data() {
    return {
      arr:[],
      
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods:{
    async cargaJuegoInicial(){
      this.arr=await obtenerFachadaPokemons()
      
    }
  },
  mounted(){
    this.cargaJuegoInicial()
  }
};
</script>

<style scoped>
.container-game {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
