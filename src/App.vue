<template>
  <q-layout>
    <q-page-container>
      <Search :getFilter="getFilter" />
      <List :pushFilter="this.filter" />
    </q-page-container>
  </q-layout>
</template>

<script>
import List from "./components/List.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Search,
    List,
  },

  data() {
    return {
      pokemons: [],
      filter: "",
    };
  },

  methods: {
    getFilter(filter) {
      this.filter = filter;
    },
  },
};
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
