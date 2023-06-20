<template>
  <div class="container" id="miCalculadora">
    <div class="calculadora">
      <input
        type="number"
        name=""
        id="numero"
        class="entrada"
        v-model="numero"
      />

      <button class="one" v-on:click="saveNum(1)">1</button>
      <button class="two" v-on:click="saveNum(2)">2</button>
      <button class="three" v-on:click="saveNum(3)">3</button>

      <button class="suma" v-on:click="saveOpt('suma')">+</button>
      <button class="four" v-on:click="saveNum(4)">4</button>
      <button class="five" v-on:click="saveNum(5)">5</button>
      <button class="six" v-on:click="saveNum(6)">6</button>
      <button class="resta" v-on:click="saveOpt('resta')">-</button>
      <button class="seven" v-on:click="saveNum(7)">7</button>
      <button class="eight" v-on:click="saveNum(8)">8</button>
      <button class="nine" v-on:click="saveNum(9)">9</button>
      <button class="multiplicacion" v-on:click="saveOpt('multiplicacion')">
        *
      </button>

      <button class="cero" v-on:click="saveNum(0)">0</button>
      <button class="equal" v-on:click="solve">=</button>

      <button class="division" v-on:click="saveOpt('division')">/</button>
      <label class="resultado" id="resultado">Resultado: {{ res }}</label>
    </div>
  </div>
</template>
<script>
var numbers = [];
var opcion = "";
var res = 0;
var numero = "";
export default {
  //  name:"Contador"

  data() {
    return {
      numero,
      res,
    };
  },
  methods: {
    saveNum(n) {
      this.numero = this.numero + n;
      numbers.push(parseInt(this.numero));
    },
    saveOpt(o) {
      this.numero = "";
      numero = "";
      opcion = o;
    },
    solve() {
      numero = "";

      if (opcion == "suma") {
        console.log(opcion);
        this.res = this.sumar;
      } else if (opcion == "multiplicacion") {
        this.res = this.multiplicar;
      } else if (opcion == "resta") {
        this.res = this.restar;
      } else {
        this.res = this.dividir;
      }
      numbers = [];
      opcion = "";
      this.numero = "";
    },
  },
  computed: {
    sumar() {
      return numbers[0] + numbers[1];
    },

    restar() {
      return numbers[0] - numbers[1];
    },

    multiplicar() {
      return numbers[0] * numbers[1];
    },
    dividir() {
      return numbers[0] / numbers[1];
    },
  },
  props: ["titulo", "valor"],
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  background-color: blue;
  padding: 15px;
  border-radius: 25px;
  box-shadow: 20px 10px 50px 10px rgb(7, 124, 108);
  /* grid-template-rows: ;*/
}
.cero {
  grid-column: span 2;
}
.entrada,
.resultado {
  grid-column: span 4;
}
.resultado {
  color: white;
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
}
button {
  background-color: blueviolet;
  border-radius: 30px;
  margin: 5px;
  border: 0px;
  color: white;
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
button:hover {
  font-size: 25px;
  border: 2px solid black;
  box-shadow: 0px 0px 10px 0px black;
}
</style>
