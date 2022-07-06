<template>
  <tr>
    <td>{{ episodeIndex + 1 }}</td>
    <td>{{ episode.name }}</td>
    <td>{{ episode.air_date }}</td>
  </tr>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: 'EpisodeItem',
  props: {
    episode: {
      type: Object,
      required: true
    },
    episodeIndex: {
      type: Number
    }
  }
}
</script>

<style scoped lang="scss">
  td {
    padding: 10px;
  }
</style>
