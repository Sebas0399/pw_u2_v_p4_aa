const obtenerPokemons = async () => {
  //Retorna array pokemons

  return await obtenerNombresPokemon(obtenerVectorNumerico());
};
function getNumeroAleatorio(inicio, fin) {
  fin++;
  return Math.floor(Math.random() * (fin - inicio) + inicio);
}
const obtenerFachadaPokemons = async() => {
  //Retorna array pokemons
  return await obtenerPokemons();
};
const obtenerVectorNumerico = () => {
  const vector = [
    getNumeroAleatorio(1, 600),
    getNumeroAleatorio(1, 600),
    getNumeroAleatorio(1, 600),
    getNumeroAleatorio(1, 600),
  ];
  return vector;
};
const consumirAPI = async (id) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (r) => r.json()
  );

  return data;
};
const obtenerNombresPokemon = async ([id1, id2, id3, id4] = []) => {
  const data1 = await consumirAPI(id1);
  const data2 = await consumirAPI(id2);
  const data3 = await consumirAPI(id3);
  const data4 = await consumirAPI(id4);

  const obj1 = {
    nombre: data1.name,
    id: data1.id,
  };
  const obj2 = {
    nombre: data2.name,
    id: data2.id,
  };
  const obj3 = {
    nombre: data3.name,
    id: data3.id,
  };
  const obj4 = {
    nombre: data4.name,
    id: data4.id,
  };
  const vectorObjetos = [obj1, obj2, obj3, obj4];
  return vectorObjetos;
};
export default obtenerFachadaPokemons;
