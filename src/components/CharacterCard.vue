<template>
  <div class="card" @click="openCharacterPage">
    <img class="card__img" :src="character.image" alt="image of character">
    <h2 class="card__name">{{ character.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  methods: {
    openCharacterPage () {
      this.$router.push({
        name: 'character-page',
        params: { id: this.character.id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    border: 2px solid #2c3e50;
    border-radius: 20px;
    background-color: #e8e8e8;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
      transform: scale(1.02);
    }
    &__img {
      padding: 20px;
        @media (max-width: 575px) {
          width: 200px;
        }
     }
    &__name {
      margin-bottom: 20px;
    }
  }
</style>
