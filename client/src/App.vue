<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->

      <nav>
        <div class="nav-wrapper #03a9f4 light-blue white-text">
          <router-link :to="{ path: '/' }"><a href="#!" class="brand-logo">Bacaa<span style="font-weight:bold;">Netizen</span></a></router-link>
          <ul id="nav-mobile" class="left hide-on-med-and-down" style="margin-left:140px;">
            <li><a>Books</a></li>
          </ul>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><router-link :to="{ path: '/register' }"><a href="">Sign Up</a></router-link></li>
            <li><router-link :to="{ path: '/register' }"><a href="">Sign In</a></router-link></li>
            <li><a href="">Sign Out</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a>Books</a></li>
        <hr>
        <li><router-link :to="{ path: '/register' }"><a href="">Sign Up</a></router-link></li>
        <li><router-link :to="{ path: '/register' }"><a href="">Sign In</a></router-link></li>
        <li><a href="">Sign Out</a></li>
      </ul>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 10px;
}

.brand-logo {
  padding-left: 10px !important;
}

#nav a {
  font-size: 20px;
  /* font-weight: bold; */
  /* color: #2c3e50; */
}

hr, .answers {
  margin-left: 20px;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
