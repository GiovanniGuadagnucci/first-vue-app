<template>
  <q-layout>
    <q-page-container>
      <ul>
        <div class="full-width row justify-around">
          <li v-for="pokemon in pokemons" v-bind:key="pokemon.name">
            <div class="my-card column justify-center items-center">
              <img :src="pokemon.sprite">
              <h2>{{ pokemon.name }}</h2>
              <p>{{ pokemon.type }}</p>
            </div>
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
      pokemons: []
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
              id: pokemon["data"]["id"]
            })
          );
        })
      );
    console.log(this.pokemons)
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
ul li {
  list-style-type: none;
}

.my-card {
  width: 160px;
  height: 160px;
  margin: 8px;
  background-color: #2c3e50;
  padding: 8px;
}
img{
  width: 80px;
  height: 80px;
}

h2 {
  color: white;
  margin: 0;
  line-height: 0;
  font-size: 16px !important;
}
p{
  color: white;
  margin: 0 !important;
  line-height: 0;
}
</style>
