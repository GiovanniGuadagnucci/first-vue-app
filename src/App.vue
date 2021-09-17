<template>
  <q-layout>
    <q-page-container>
      <ul>
        <div class="full-width row justify-around">
          <li v-for="pokemon in pokemons" v-bind:key="pokemon.name">
            <q-card class="my-card">
              <q-img :src="pokemon.sprite">
                <div class="absolute-bottom">
                  <div class="text-h6">{{ pokemon.name }}</div>
                  <div class="text-subtitle2">{{ pokemon.type }}</div>
                </div>
              </q-img>
            </q-card>
          </li>
        </div>
      </ul>
    </q-page-container>
  </q-layout>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) =>
        response["data"]["results"].forEach((element) => {
          axios.get(element["url"]).then((pokemon) =>
            this.pokemons.push({
              sprite:
                pokemon["data"]["sprites"]["other"]["dream_world"][
                  "front_default"
                ],
              name: pokemon["data"]["name"],
              type: pokemon["data"]["types"][0]["type"]["name"],
            })
          );
        })
      );
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
ul li {
  list-style-type: none;
}
img {
  width: 100px;
}
.my-card {
  width: 250px;
}
</style>
