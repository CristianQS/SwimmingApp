<template>
  <div>
    <back-top-bar/>
    <div>
      <h2>Plan de Entrenamiento</h2>
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
            <modify-form
              :type="'Training'"
              :name="training.name"
              />
          </template>
      </training-card>
    </div>
     <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="green"
      >
        <v-icon>add</v-icon>
      </v-btn>

    </div>
</template>

<script>
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../components/BackTopBar.vue'
import ActivityForm from '../components/ActivityForm.vue'
import ModifyForm from '../components/ModifyForm.vue'

export default {
  name: 'Activities',
  components: {
    TrainingCard,
    BackTopBar,
    ActivityForm,
    ModifyForm
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
