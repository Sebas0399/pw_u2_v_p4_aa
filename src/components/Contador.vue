<template lang="">
  <div>
    <h3>{{ putTitle }}</h3>
    <p>{{ num }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
    <p>{{ num }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
    <p>{{ num }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
    <button @click="up">+</button>
    <button v-on:click="down">-</button>
  </div>
</template>
<script>
export default {
  //  name:"Contador"

  data() {
    return {
      num: this.inicio,
      tituloComponente: this.titulo,
    };
  },
  methods: {
    up() {
        
      this.num++;
    },
    down() {
      this.num--;
    },
    pot() {
      console.log("Metodo cuadrado");
      return this.num * this.num;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Metodo cuadrado computado");
      return this.num * this.num;
    },
    putTitle() {
      if (this.tituloComponente != null) {
        return this.tituloComponente;
      } else {
        return "UNDEFINED";
      }
    },
  },
  props:{
    titulo:{
        type:String,
        required:true
    },
    inicio:{
        type:Number,
        required:false,
        default:100,
        validator(value){

            return value>10
        }
    }
  }
};
</script>
<style lang="css">
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
}
button:hover {
  background-color: #5aa67b;
}
</style>
