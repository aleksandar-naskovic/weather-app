<template>
  <div id="app" >
    <div id="container">
      <div id="nav">
        <router-link to="/"><img alt="Vue logo" src="./assets/logo.svg"></router-link>
      </div>
      <router-view/>
    </div>
      <footer>
        Frontend Task | Mad Duck Code
      </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:  linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, -6)) , url("assets/background.png")  no-repeat center center fixed ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 1;
  min-height: 99vh;
}

#container {
  width: 1520px;
  position: relative;
  display: flex;
  margin: auto;
  flex-direction: column;
}

#nav {
  display: flex;
  align-items: flex-start;
  margin-top: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@font-face {
  font-family: "Poppins Bold";
  src: url('./assets/fonts/Poppins-Bold.ttf');
}

@font-face {
  font-family: "Poppins Light";
  src: url('./assets/fonts/Poppins-Light.ttf');
}

@font-face {
  font-family: "Poppins Regular";
  src: url('./assets/fonts/Poppins-Regular.ttf');
}
@font-face {
  font-family: "Poppins Medium";
  src: url('./assets/fonts/Poppins-Medium.ttf');
}s
@font-face {
  font-family: "Poppins SemiBold";
  src: url('./assets/fonts/Poppins-SemiBold.ttf');
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #04353C 0% 0% no-repeat padding-box;
  height: auto;
  min-width: 99%;
  padding: 10px;
  text-align: center;
  font: normal normal 300 16px/25px "Poppins Regular";
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin: auto
}
</style>
