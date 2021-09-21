<template>
  <div class="my-card column justify-around items-center">
    <img :src="pokeSprite" />
    <h2>{{ pokeName }}</h2>
    <p>{{ pokeType }}</p>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ["pokeSprite", "pokeName", "pokeType"],
};
</script>

<style scoped>
.my-card {
  display: flex;
  width: 160px;
  height: 160px;
  margin: 8px;
  background-color: #2c3e50;
  padding: 8px;
}
img {
  width: 80px;
  height: 80px;
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
