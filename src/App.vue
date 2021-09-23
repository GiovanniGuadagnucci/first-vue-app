<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6">
        <List :pushFilter="this.filter" />
      </div>
      <div class="trainer col-6">
        <Search :getFilter="getFilter" />
        <ChosenPokemon />
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
    };
  },

  methods: {
    getFilter(filter) {
      this.filter = filter;
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
