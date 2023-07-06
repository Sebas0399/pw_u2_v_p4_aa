<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor.....</h1>
  <div class="container-all" v-if="pokemonCorrecto">
  <h1>Juego Pokemon</h1>
  <div class="container-game">
    <PokemonImg  :pokemonId=pokemonCorrecto.id :muestraPokemon="showPokemon" />
    
  </div>

  <PokemonOps :opciones="arr" v-on:seleccionado="revisarSeleccion($event)"/>
</div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI"

export default {
  data() {
    return {
      arr:[],
      pokemonCorrecto:null,
      showPokemon:false
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods:{
    async cargaJuegoInicial(){
      const arregloPokemons=await obtenerFachadaPokemons()
      this.arr=arregloPokemons
      const indicePokemon=Math.floor(Math.random()*4)
      this.pokemonCorrecto=this.arr[indicePokemon]
      
    },
    revisarSeleccion(idSeleccionado){
      
      if(this.pokemonCorrecto.id==idSeleccionado){
        this.showPokemon=true

      }
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
