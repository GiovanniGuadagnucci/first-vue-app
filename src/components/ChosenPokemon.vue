<template>
  <div class="full-width row justify-around">
    <div v-if="pushPokemon" class="my-card column justify-around items-center">
      <img :src="pushPokemon.sprite" />
      <h2>{{ pushPokemon.name }}</h2>
      <p>{{ pushPokemon.type }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChosenPokemon",
  props: ["pushPokemon"],
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
