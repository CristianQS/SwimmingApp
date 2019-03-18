<template>
  <div>
    <back-top-bar/>
    <div>
      <h2>Entreno</h2>
          <v-layout align-center justify-center>
      <v-flex xs12 md6>
        <v-text-field prepend-inner-icon="search"></v-text-field>
      </v-flex>
    </v-layout>
      <training-card v-for="training in activities"
          class="trainingCard"
          :key="training.name"
          :methods="methods"
          :training="training">
          <template v-slot:modify>
            <activity-form></activity-form>
          </template>
      </training-card>
    </div>
    <floating-button @click="dialog != dialog">
      add
    </floating-button>
    </div>
</template>

<script>
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../components/BackTopBar.vue'
import ActivityForm from '../components/ActivityForm.vue'
import ModifyForm from '../components/ModifyForm.vue'
import FloatingButton from '../components/FloatingButton.vue'

export default {
  name: 'Activities',
  components: {
    TrainingCard,
    BackTopBar,
    ActivityForm,
    ModifyForm,
    FloatingButton
  },
  data () {
    return {
      activities: [
        {
          name: 'Actividad 1'
        },
        {
          name: 'Actividad 2'
        },
        {
          name: 'Actividad 3'
        },
        {
          name: 'Actividad 4'
        },
        {
          name: 'Actividad 5'
        },
        {
          name: 'Actividad 6'
        }
      ],
      dialog: false,
      methods: {
        clone: this.clone,
        delete: this.delete
      }
    }
  },
  methods: {
    clone () {
      console.log('clonar')
    },
    delete () {
      console.log('eliminar')
    }
  }

}
</script>

<style>
.trainingCard {
  cursor: pointer;
}
</style>
