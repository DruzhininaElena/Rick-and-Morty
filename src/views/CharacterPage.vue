<template>
  <div class="container">
    <div class="character">
      <h1 class="character__name">{{ getCurrentCharacter.name }}</h1>
      <img class="character__img" :src="getCurrentCharacter.image">
      <div class="character__info info">
        <div class="info__gender info__item"><b>gender:</b> {{ getCurrentCharacter.gender }}</div>
        <div class="info__species info__item"><b>species:</b> {{ getCurrentCharacter.species }}</div>
        <div class="info__status info__item"><b>status:</b> {{ getCurrentCharacter.status }}</div>
      </div>
      <episodes-list />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import EpisodesList from '@/components/EpisodesList'

export default {
  name: 'CharacterPage',
  components: {
    EpisodesList
  },
  methods: {
    ...mapActions('charactersModule', ['fetchCharacterById']),
    ...mapActions('episodesModule', ['fetchEpisode']),
    ...mapMutations('episodesModule', ['SET_CURRENT_EPISODES'])
  },
  computed: {
    ...mapGetters('charactersModule', ['getCurrentCharacter']),
    ...mapGetters('episodesModule', ['getCurrentEpisodes'])
  },
  mounted () {
    this.SET_CURRENT_EPISODES([])
    this.fetchCharacterById(this.$route.params.id)
      .then(() => {
        this.getCurrentCharacter.episode.forEach(episode => {
          this.fetchEpisode(episode)
        })
      })
  }
}
</script>

<style scoped lang="scss">
  .character {
    &__name {
      padding: 30px 0;
    }
    &__img {
      border-radius: 50%;
      margin-bottom: 30px;
      @media (max-width: 575px) {
        width: 200px;
      }
    }
    .info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      justify-content: center;
      font-size: 20px;
      margin-bottom: 70px;
      @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 50px;
      }
      @media (max-width: 575px) {
        font-size: 12px;
        margin-bottom: 30px;
      }
      &__item {
        padding: 5px;
        border: 2px solid #2c3e50;
        border-radius: 10px;
        background-color: #bbbbbb;
      }
    }
  }
</style>
