<template>
  <div class="container">
    <h1>Caracola Magica</h1>
    <img src="https://via.placeholder.com/250" alt="No se puede mostrar" />
    <input type="text" placeholder="Hazme una pregunta" v-model="pregunta"/>
    <p>Recuerda terminar con un enter la pregunta</p>
    <div>
      <h2>Voy a pasar de año</h2>
      <h1>SI, NO</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        pregunta:'Hola mundo'
    };
  },
};
</script>

<style>
.container{
    flex-direction: column;
}
</style>
