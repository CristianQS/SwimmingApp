<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field
          @focus="newPlanTraining()"
          autofocus
          v-model="plantraining.name"
          label="Name"
          required/>
      </v-flex>
      <v-flex xs12 sm2 md12>
        <v-select
          v-model="plantraining.user"
          @focus="newPlanTraining()"
          :items="usersWithoutTrainer"
          item-value="value"
          :value="1"
          label="Select Users"
          multiple
          chips
        >
          <v-list-tile
            slot="prepend-item"
            ripple
            @click="toggle"
          >
            <v-list-tile-action>
              <v-icon :color="plantraining.user.length > 0 ? 'indigo darken-4' : ''">{{icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Select All</v-list-tile-title>
          </v-list-tile>
          <v-divider
            slot="prepend-item"
            class="mt-2"
          />
    </v-select>
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

export default {
  name: 'PlanTrainingForm',
  data () {
    return {
      plantraining: {
        user: [],
        name: 'Plan Training',
        description: 'In this plan training will we train ...'
      },
    }
  },
  methods: {
    newPlanTraining () {
      this.plantraining.user.push(this.trainer.id)
      this.$emit('plantraining', this.plantraining)
    },
    toggle () {
      this.$nextTick(() => {
        if (this.allUsers) {
          this.plantraining.user = []
        } else {
          this.plantraining.user = this.usersWithoutTrainer.slice()
        }
      })
    }
  },
  computed: {
    ...mapState({
      usersClub: state => state.usersClub,
      trainer: state => state.user
    }),
    usersWithoutTrainer () {
      return this.usersClub.filter(user => user.value !== this.trainer.id)
    },
    allUsers () {
      return this.plantraining.user.length === this.usersWithoutTrainer.length
    },
    someUsers () {
      return this.plantraining.user.length > 0 && !this.allUsers
    },
    icon () {
      if (this.allUsers) return 'check_box'
      if (this.someUsers) return 'indeterminate_check_box'
      return 'check_box_outline_blank'
    }
  }
}
</script>
