<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 md6>
        <v-text-field prepend-inner-icon="search"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 md12>
        <h2>Búsqueda</h2>
        <seacher-result v-for="result in results"
          :key="result.nick"
          :user="result"></seacher-result>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SeacherResult from '../components/SeacherResult.vue'

export default {
  name: 'SeacherView',
  components: {
    SeacherResult
  },
  data () {
    return {
      results: [
        {
          name: 'Pepe',
          img: require('@/assets/user.png'),
          nick: '@pepeit'
        },
        {
          name: 'Pepe',
          img: require('@/assets/user.png'),
          nick: '@pepei'
        },
        {
          name: 'Pepe',
          img: require('@/assets/user.png'),
          nick: '@pepeito'
        },
        {
          name: 'Pepe',
          img: require('@/assets/user.png'),
          nick: '@pepe'
        }
      ]
    }
  }
}
</script>

<style>

</style>
