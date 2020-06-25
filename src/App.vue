<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title class="ml-5">Salty lychee</v-toolbar-title>
      <v-btn class="ml-3" to="/">portfolio</v-btn>
      <v-btn class="ml-3" to="/about">about</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
