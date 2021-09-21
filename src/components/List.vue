<template>
  <ul>
    <div class="full-width row justify-around">
      <li v-for="pokemon in filtredList" v-bind:key="pokemon.id">
        <Cards
          v-on:click="getPoke(pokemon)"
          :pokeSprite="pokemon.sprite"
          :pokeName="pokemon.name"
          :pokeType="pokemon.type"
        />
      </li>
    </div>
  </ul>
</template>

<script>
import Cards from "./Cards.vue";
import axios from "axios";

export default {
  name: "List",
  props: ["pushFilter", "getPoke"],
  components: {
    Cards,
  },

  data() {
    return {
      pokemons: [],
    };
  },

  computed: {
    filtredList() {
      if (this.pushFilter) {
        return this.pokemons.filter(
          (pokemon) =>
            pokemon.name.includes(`${this.pushFilter}`) ||
            pokemon.id == this.pushFilter
        );
      } else {
        return this.pokemons;
      }
    },
  },

  beforeCreate() {
    axios("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(
      (response) => {
        response.data.results.forEach((element) => {
          axios.get(element.url).then((pokemon) => {
            this.pokemons.push({
              sprite: pokemon.data.sprites.other.dream_world.front_default,
              name: pokemon.data.name,
              type: pokemon.data.types[0].type.name,
              id: pokemon.data.id,
            });
          });
        });
      }
    );
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}
ul li {
  list-style-type: none;
}
</style>
