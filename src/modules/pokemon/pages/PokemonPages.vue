<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="99" :muestraPokemon="mostrar" />

  <PokemonOps />
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
  data() {
    mostrar: false;
  },
};
</script>

<style></style>
