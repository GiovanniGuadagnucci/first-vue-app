        <template>
  <div class="container">
    <div class="cards-wrapper">
      <ul>
        <li v-for="pokemon in pokemons" v-bind:key="pokemon.name">
          <div class="card">
            <img :src="pokemon.sprite" alt="" />
            <div class="card-content">
              <h1>{{ pokemon.name }}</h1>
              <p>{{ pokemon.type }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
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
      .get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
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

.card {
  border: 1px solid #2c3e50;
  width: 300px;
}
img {
  height: 30vh;
  background-color: #2c3e50;
  border-radius: 5px;
}
</style>
