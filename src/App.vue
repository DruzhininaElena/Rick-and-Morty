<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'CharactersView',
  components: {
  }
}
</script>

<style lang="scss">
  *{padding: 0;margin: 0;border: 0;}

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: radial-gradient(#0b680b, #5d890c, #b3ff00);
    min-height: 100vh;
    padding-bottom: 20px;
  }
  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 40px;
    @media (max-width: 991px) {
      padding: 0 20px;
    }
  }

</style>
