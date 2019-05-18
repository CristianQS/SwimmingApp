<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field
          @focus="newPlanTraining()"
          v-model="newPlantraining.name"
          label="Name"
          required
          />
      </v-flex>
      <v-flex xs12 sm2 md12>
        <v-select
          v-model="newPlantraining.user"
          @focus="newPlanTraining()"
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
          v-model="newPlantraining.description"
          label="Description"
          required/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModifyForm',
  props: {
    plantraining: { type: Object, required: true }
  },
  data () {
    return {
      newPlantraining: Object.assign({}, this.plantraining)
    }
  },
  methods: {
    newPlanTraining () {
      let response = {
        id: this.newPlantraining.id,
        plantraining: this.newPlantraining
      }
      this.$emit('updateInstance', response)
    }
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
