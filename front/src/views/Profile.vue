<template>
  <div>
    <v-flex xs12 sm8 offset-sm2 md8>
      <card-profile :user="user"></card-profile>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md8>
      <calendar></calendar>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md8>
      <tabs></tabs>
    </v-flex>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'
import CardProfile from '../components/CardProfile.vue'
import Calendar from '../components/Calendar.vue'


export default {
  name: 'Profile',
  components: {
    Tabs,
    CardProfile,
    Calendar
  },
  data () {
    return {
      user: {
        name: 'pepe',
        nick: '@pepiro',
        img: 'user.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptate facere repellat voluptatem suscipit recusandae ipsa repudiandae minima velit asperiores ab corporis esse illum, ullam unde cumque harum, excepturi quisquam. Tempora incidunt quaerat eaque. Corporis debitis facilis eaque ratione nam quia molestiae id commodi aliquid reprehenderit nihil pariatur consequuntur illum omnis, accusantium esse aliquam consequatur impedit reiciendis ipsam sit neque. Nobis explicabo ipsum rem fugit quia at numquam. Maiores vitae temporibus iure labore officiis. Repudiandae in mollitia velit ratione adipisci. Aperiam rem nam, consequuntur numquam eius cupiditate corporis. Quaerat sapiente doloremque aperiam nihil nobis optio eaque quas qui beatae voluptatibus, similique dolorem omnis rerum totam quos molestiae ducimus minus et dolore animi quisquam officiis cupiditate. Iusto minima tenetur ducimus sit magnam dolorem nobis ipsum! Deserunt quaerat dolorem temporibus molestias. Nulla?'
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
