<template>
  <div class="q-pa-md">
    <div
      class="q-gutter-md"
      style="max-width: 300px"
      v-on:input="getFilter(filter)"
    >
      <q-input
        placeholder="Digite o nome ou o ID do Pokemon"
        v-model="filter"
        label="Pokemon"
      />
      <h5>{{ filter }}</h5>
    </div>
  </div>
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
