<template>
  <div id="nav">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/user/1">User</router-link> | 
      <router-link to="/places">Places</router-link> |
      <router-link to="/nested">Nested</router-link> |
      <router-link to="/programmatic">Programmatic</router-link> |
      <router-link to="/dataFetching">Data Fetching</router-link>
    </p>
  </div>
  <router-view/>
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
</style>
