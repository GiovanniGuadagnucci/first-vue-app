<template>
  <q-layout>
    <q-page-container>
      <Search :getFilter="getFilter" />
      <ul>
        <div class="full-width row justify-around">
          <li v-for="pokemon in filtredList" v-bind:key="pokemon.id">
            <Cards
              :pokeSprite="pokemon.sprite"
              :pokeName="pokemon.name"
              :pokeType="pokemon.type"
            />
          </li>
        </div>
      </ul>
    </q-page-container>
  </q-layout>
</template>
<script>
import axios from "axios";
import Cards from "./components/Cards.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Cards,
    Search,
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

    pushSorted(pokemons, pokemon) {
      const data = {
        sprite:
          pokemon["data"]["sprites"]["other"]["dream_world"]["front_default"],
        name: pokemon["data"]["name"],
        type: pokemon["data"]["types"][0]["type"]["name"],
        id: pokemon["data"]["id"],
      };
      pokemons.push(data);
      pokemons.sort(function (a, b) {
        return a.id - b.id;
      });
      return pokemons;
    },
  },

  computed: {
    filtredList() {
      if (this.filter) {
        return this.pokemons.filter((pokemon) =>
          pokemon.name.includes(`${this.filter}`)
        );
      } else {
        return this.pokemons;
      }
    },
  },

  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) =>
        response["data"]["results"].forEach((element) => {
          axios
            .get(element["url"])
            .then((pokemon) => this.pushSorted(this.pokemons, pokemon));
        })
      );
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
ul {
  padding: 0;
}
ul li {
  list-style-type: none;
}
</style>
