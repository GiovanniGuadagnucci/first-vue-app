import { createStore } from "vuex";

export default createStore({
  name: "ChosenPokemonStore",
  state() {
    return {
      chosenPokemons: [],
    };
  },
  mutations: {
    addPokemon(state, payload) {
      if (state.chosenPokemons.length < 6) {
        state.chosenPokemons.push(payload);
      } else {
        console.log(state.chosenPokemons);
      }
    },
    removePokemon(state, payload) {
      state.chosenPokemons.forEach((element, index) => {
        if (element.id === payload.id) {
          state.chosenPokemons.splice(index, 1);
        }
      });
    },
  },
});
