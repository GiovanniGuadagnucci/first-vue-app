<template>
  <q-layout>
    <q-page-container>
      <ChosenPokemon :pushPokemon="this.chosenPokemon" />
      <Search :getFilter="getFilter" />
      <List :pushFilter="this.filter" :getPoke="getPoke" />
    </q-page-container>
  </q-layout>
</template>

<script>
import List from "./components/List.vue";
import Search from "./components/Search.vue";
import ChosenPokemon from "./components/ChosenPokemon.vue";

export default {
  name: "App",
  components: {
    Search,
    List,
    ChosenPokemon,
  },

  data() {
    return {
      filter: null,
      chosenPokemon: null,
    };
  },

  methods: {
    getFilter(filter) {
      this.filter = filter;
    },

    getPoke(pokemon) {
      this.chosenPokemon = pokemon;
      console.log(pokemon);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
