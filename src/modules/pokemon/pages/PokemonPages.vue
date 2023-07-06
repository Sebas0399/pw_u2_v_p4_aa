<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor.....</h1>
  <div class="container-all" v-if="pokemonCorrecto">
    <h1>Juego Pokemon</h1>
    <h1 v-if="perdio">Perdio</h1>

    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Intentos: {{ intentos }}</h1>
    <div class="container-game">
      <PokemonImg
        :pokemonId="pokemonCorrecto.id"
        :muestraPokemon="showPokemon"
      />
    </div>

    <PokemonOps :opciones="arr" v-on:seleccionado="revisarSeleccion($event)" />
    <button v-if="showPokemon" @click="reset">Reiniciar</button>
    <button v-if="perdio" @click="reset">Reiniciar</button>

  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      arr: [],
      pokemonCorrecto: null,
      showPokemon: false,
      intentos: 0,
      puntaje: 0,
      perdio: false,
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.arr = arregloPokemons;
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.arr[indicePokemon];
    },
    reset() {
      this.cargaJuegoInicial();
      this.puntaje = 0;
      this.intentos = 0;
      this.showPokemon = false;
      this.perdio=false
    },
    revisarSeleccion(idSeleccionado) {
      if (this.showPokemon != true&&this.perdio==false) {
        this.intentos++;
        if (this.pokemonCorrecto.id == idSeleccionado) {
          this.showPokemon = true;
          if (this.intentos == 1) {
            this.puntaje = this.puntaje + 5;
          } else if (this.intentos == 2) {
            this.puntaje = this.puntaje + 2;
          } else if (this.intentos == 3) {
            this.puntaje = this.puntaje + 1;
          } 
        }
        
      }
      if(this.intentos>3){
        this.intentos--
        this.perdio=true
      }
      
    },
  },
  mounted() {
    this.cargaJuegoInicial();
  },
};
</script>

<style scoped>
.container-game {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
