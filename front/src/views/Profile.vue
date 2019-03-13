<template>
  <div>
    <v-img :src="require('@/assets/user.png')"
      width="75"
      height="75"
      class="card__img"
    />
    <tabs></tabs>

  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'

export default {
  name: 'Profile',
  components: {
    Tabs
  },
  data () {
    return {
      img: 'user.png'
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
