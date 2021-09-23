<template>
  <div v-if="chosenPokemons" class="full-width row justify-around">
    <div
      v-for="pokemon in chosenPokemons"
      v-bind:key="pokemon.id"
      class="my-card column justify-around items-center"
      v-on:click="removePokemon(pokemon)"
    >
      <img :src="pokemon.sprite" />
      <h2>{{ pokemon.name }}</h2>
      <p>{{ pokemon.type }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ChosenPokemon",

  computed: {
    ...mapState(["chosenPokemons"]),
  },

  methods: {
    ...mapMutations(["removePokemon"]),
  },
};
</script>

<style scoped>
.my-card {
  display: flex;
  justify-content: space-around;
  width: 240px;
  height: 240px;
  margin: 8px;
  background-color: #2c3e50;
  padding: 8px;
}
img {
  width: 160px;
  height: 160px;
}

h2 {
  color: white;
  margin: 0;
  line-height: 0;
  font-size: 16px !important;
}
p {
  color: white;
  margin: 0 !important;
  line-height: 0;
}
</style>
