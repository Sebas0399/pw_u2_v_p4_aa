<template>
  <h1>Caracola Magica</h1>
  <img v-if="imagen !== ''" :src="imagen" alt="No se puede mostrar" />
  <div class="db-dark"></div>
  <div class="container">
    <input  type="text" placeholder="Hazme una pregunta" v-model="pregunta" />

    <div>
      <h2>{{ pregunta }}</h2>
      <h2>{{ respuesta }}</h2>       
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      imagen: "",
     
    };
  },
  methods: {
    async consumirApi() {
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (response) => response.json()
      );
      this.respuesta = answer;
      this.imagen = image;
    },
    cambiarEstilo(){

    }
  },
  watch: {
    
    pregunta(value, oldValue) {
      this.respuesta='Pensando...';
      if (value.includes("?")) {
        this.consumirApi();
        this.respuesta='';
        this.pregunta='';
      }
      
    },
  },
};
</script>

<style>
.container {
  flex-direction: column;
  position: relative;
}

img,
.db-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  
}
.db-dark {
  background-color: rgba(0, 0, 0, 0.4);
}
input{
  width: 250px;
  padding: 10px,15px;
  border-radius: 5px;
  border: none;
}
h2{
  color: white;
  font-size: 50px;
}
</style>
