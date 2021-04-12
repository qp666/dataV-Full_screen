<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">echarts</router-link> |
      <router-link to="/about">dataV</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button{
  border-radius: 10%;
    width: 100px;
    height: 50px;
    background-color: #0be881;
    color: #fff;
    border: none;
}
button:focus,
button:active:focus,
button.active:focus,
button.focus,
button:active.focus,
button.active.focus {
  outline: none;
  box-shadow:none;
}

</style>
