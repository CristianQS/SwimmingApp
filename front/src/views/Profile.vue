<template>
  <div>
    <!-- <v-img :src="require('@/assets/user.png')"
      width="75"
      height="75"
      class="card__img"
    /> -->
    <card-profile :user="user"></card-profile>
    <tabs></tabs>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'
import CardProfile from '../components/CardProfile.vue'

export default {
  name: 'Profile',
  components: {
    Tabs,
    CardProfile
  },
  data () {
    return {
      user: {
        name: 'pepe',
        nick: 'pepiro',
        img: 'user.png'
      }
      
    }
  }

}
</script>

<style>
.card {
  margin: 10px 0;
}
.card__img {
  margin: 20px 0 0 10px;
}
</style>
