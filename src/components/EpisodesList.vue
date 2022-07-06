<template>
  <div class="episodes">
    <h2 class="episodes__title">List of episodes in which this character was</h2>
    <table class="episodes__table">
      <thead>
      <tr>
        <th>№</th>
        <th>Episode name</th>
        <th>Release date</th>
      </tr>
      </thead>
      <tbody>
      <episode-item
        v-for="(episode, index) in getCurrentEpisodes"
        :key="episode.id"
        :episode="episode"
        :episode-index="index"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EpisodeItem from '@/components/EpisodeItem'

export default {
  name: 'EpisodesList',
  components: {
    EpisodeItem
  },
  computed: {
    ...mapGetters('episodesModule', ['getCurrentEpisodes'])
  }
}
</script>

<style scoped lang="scss">
  .episodes {
    &__title {
      margin-bottom: 20px;
    }
    &__table {
      table-layout: fixed;
      width: 100%;
      border-collapse: collapse;
      border: 2px solid #2c3e50;
      border-radius: 10px;
      thead {
        background-color: #a0a0a0;
        th {
          padding: 10px;
          &:nth-child(1) {
            width: 10%;
          }
          &:nth-child(2) {
            width: 60%;
          }
          &:nth-child(3) {
            width: 30%;
          }
        }
      }
      tbody {
        tr {
          &:nth-child(odd) {
            background-color: #cecece;
          }
          &:nth-child(even) {
            background-color: #bbbbbb;
          }
        }
      }
    }
    @media (max-width: 767px) {
      &__title {
        font-size: 22px;
      }
      &__table {
        font-size: 14px;
        thead {
          th {
            padding: 8px;
          }
        }
      }
    }
    @media (max-width: 575px) {
      &__title {
        font-size: 18px;
      }
      &__table {
        font-size: 10px;
        thead {
          th {
            padding: 5px;
          }
        }
      }
    }
  }
</style>
