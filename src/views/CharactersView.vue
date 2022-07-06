<template>
  <app-preloader v-if="getPreloader"/>
  <div class="characters">
    <h1 class="characters__title">Rick and Morty</h1>
    <div class="characters__cards">
      <transition-group name="cards" appear mode="out-in">
        <character-card
          v-for="character in getCharacters"
          :key="character.id"
          :character="character"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'
import AppPreloader from '@/components/AppPreloader'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CharactersView',
  components: {
    CharacterCard,
    AppPreloader
  },
  computed: {
    ...mapGetters('charactersModule', ['getCharacters']),
    ...mapGetters('preloaderModule', ['getPreloader'])
  },
  methods: {
    ...mapActions('charactersModule', ['fetchCharacters']),
    ...mapMutations('preloaderModule', ['SET_PRELOADER'])
  },
  mounted () {
    this.SET_PRELOADER(true)
    this.fetchCharacters().then(() => this.SET_PRELOADER(false))
  }
}
</script>

<style lang="scss" scoped>
  .characters {
    &__title {
      padding: 30px 0;
      font-size: 40px;
      @media (max-width: 575px) {
        font-size: 30px;
      }
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 767px) {
        grid-template-columns: 75%;
        justify-content: center;
      }
      @media (max-width: 575px) {
        grid-template-columns: 100%;
      }
    }
  }
  .cards-enter-from,
  .cards-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }
  .cards-enter-active,
  .cards-leave-active {
    transition: 0.5s;
    transition-timing-function: ease-out;
  }
</style>
