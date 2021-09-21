<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6">
        <List :pushFilter="this.filter" :getPoke="getPoke" />
      </div>
      <div class="trainer col-6">
        <Search :getFilter="getFilter" />
        <ChosenPokemon :pushPokemon="this.chosenPokemon" />
      </div>
    </div>
  </div>
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
.trainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  height: 40vh !important;
}
</style>
