<template>
  <input
    placeholder="Nome do poke"
    v-model="filter"
    v-on:input="getFilter(filter)"
  />
  <h5>{{ filter }}</h5>
</template>

<script>
export default {
  name: "Search",
  props: ["getFilter"],

  data() {
    return {
      filter: "",
    };
  },
};
</script>

<style>
</style>
