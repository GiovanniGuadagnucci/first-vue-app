import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import ChosenPokemonStore from "./store/ChosenPokemonStore.js";
import quasarUserOptions from "./quasar-user-options";

// Create a new store instance.

const app = createApp(App);

// Install the store instance as a plugin
app.use(ChosenPokemonStore);
app.use(Quasar, quasarUserOptions);
app.mount("#app");
