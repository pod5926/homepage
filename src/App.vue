<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title class="ml-5">Shogo-Portfolio</v-toolbar-title>
      <v-btn class="ml-3">Profile</v-btn>
    </v-app-bar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  })
}
</script>
