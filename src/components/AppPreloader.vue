<template>
  <div class="load">
    <hr/><hr/><hr/><hr/>
  </div>
  <div class="load__background" @click.prevent=""></div>
</template>

<script>
export default {
  name: 'AppPreloader'
}
</script>

<style lang="scss" scoped>
  .load{
    z-index: 100;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:100px;
    height:100px;
    &__background {
      z-index: 99;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: rgba(0,0,0,0.5);
    }

    & hr {
      border:0;
      margin:0;
      width:40%;
      height:40%;
      position:absolute;
      border-radius:50%;
      animation:spin 2s ease infinite
    }

    & :nth-child(1) {
      background:#5d890c;
      animation-delay:-1.5s
    }
    & :nth-child(2) {
      background:#0b680b;
      animation-delay:-1s
    }
    & :nth-child(3) {
      background:#5d890c;
      animation-delay:-0.5s
    }
    & :nth-child(4) {
      background:#0b680b
    }
  }
  @-webkit-keyframes spin{
    0%,100%{-webkit-transform:translate(0);transform:translate(0)}
    25%{-webkit-transform:translate(160%);transform:translate(160%)}
    50%{-webkit-transform:translate(160%, 160%);transform:translate(160%, 160%)}
    75%{-webkit-transform:translate(0, 160%);transform:translate(0, 160%)}
  }
  @keyframes spin{
    0%,100%{-webkit-transform:translate(0);transform:translate(0)}
    25%{-webkit-transform:translate(160%);transform:translate(160%)}
    50%{-webkit-transform:translate(160%, 160%);transform:translate(160%, 160%)}
    75%{-webkit-transform:translate(0, 160%);transform:translate(0, 160%)}
  }
</style>
