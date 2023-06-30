<template>
  <div class="contendor-imagen">
    <img v-if="!muestraPokemon"
      class="oculta-pokemon"
      :src="imagenFuente"
      alt="No se puede mostrar imagen"
    />
    <img
      v-if="muestraPokemon"
      :src="imagenFuente"
      alt="No se puede mostrar imagen"
    />
  </div>
</template>

<script>
export default {
  computed: {
    imagenFuente() {
      // return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+this.pokemonId+'.svg';
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}
img {
  
 
  height: 200px;
  right: 32%;
}
.contendor-imagen {
  height: 200px;
  width: 300px;
}
</style>
