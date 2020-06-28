<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title class="ml-5">Salty lychee</v-toolbar-title>
      <v-btn class="ml-3" to="/" text>portfolio</v-btn>
      <v-btn class="ml-3" to="/about" text>about</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid transition="fade-transition">
        <router-view />
      </v-container>
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fadeleave-active {
  transition: opacity 0.5s;
}
</style>
