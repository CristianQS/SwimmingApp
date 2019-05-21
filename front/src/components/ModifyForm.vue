<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field
          @focus="newPlanTraining()"
          @change="newPlanTraining()"
          v-model="newPlantraining.name"
          counter
          maxlength="20"
          :rules="[rules.required, rules.counter]"
          label="*Name"
          required
          />
      </v-flex>
      <v-flex xs12 sm2 md12>
        <v-select
          v-model="newPlantraining.user"
          @focus="newPlanTraining()"
          @change="newPlanTraining()"
          :items="usersWithoutTrainer"
          item-value="value"
          :value="1"
          label="Add more Users"
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
          @change="newPlanTraining()"
          outline
          v-model="newPlantraining.description"
          counter
          maxlength="150"
          :rules="[rules.counterDescription]"
          label="*Description"
          />
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
      newPlantraining: Object.assign({}, this.plantraining),
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        counterDescription: value => value.length <= 150 || 'Max 150 characters'
      }
    }
  },
  methods: {
    newPlanTraining () {
      let response = {
        id: this.newPlantraining.id,
        plantraining: this.newPlantraining
      }
      if (this.newPlantraining.name.length > 0) {
        this.$emit('updateInstance', response)
      } else {
        this.$emit('updateInstance', undefined)
      }
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

<style>

</style>
