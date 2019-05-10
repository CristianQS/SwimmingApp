<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field
          @focus="newPlanTraining()"
          v-model="plantraining.name"
          label="Name"
          required/>
      </v-flex>
      <v-flex xs12 sm2 md12>
        <v-select
          v-model="plantraining.user"
          :items="usersClub"
          label="Select Users"
          multiple
          chips
        />
      </v-flex>
      <v-flex xs12 sm2 md12>
        <h3>Description</h3>
        <v-textarea
          @focus="newPlanTraining()"
          outline
          v-model="plantraining.description"
          label="Description"
          required/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { GET_USERS_BY_CLUB } from '../store/types/UserTypes'

export default {
  name: 'PlanTrainingForm',
  data () {
    return {
      plantraining: {
        user: [],
        name: '',
        description: ''
      },
      value: []
    }
  },
  methods: {
    newPlanTraining () {
      this.$emit('plantraining', this.plantraining)
    },
    ...mapActions({
      getUsersByClub: GET_USERS_BY_CLUB
    })
  },
  computed: {
    ...mapState({
      usersClub: state => state.usersClub
    })
  }
}
</script>

<style>

</style>
