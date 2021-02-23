<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span style="padding-top:0;" class="mdl-layout-title">La Gaceta</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <router-link to="/" class="mdl-navigation__link" href="">Inicio</router-link>
            <router-link to="/graficos" class="mdl-navigation__link" href="">Graficos</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">La Gaceta</span>
        <nav class="mdl-navigation">
          <router-link to="/" class="mdl-navigation__link" href="">Inicio</router-link>
          <router-link to="/graficos" class="mdl-navigation__link" href="">Graficos</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <img src="./assets/lg-logo1.png" alt="Logo de la Gaceta">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
require("material-design-lite")
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.3.0/material.blue-light_blue.min.css');
@import url('https://apis.google.com/js/api.js');
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
