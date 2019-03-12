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
      <training-card v-for="training in trainings"
          class="trainingCard"
          :key="training.name"
          :url="'/activities'"
          :methods="methods"
          :training="training"
      >
        <form-dialog/>
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
import BackTopBar from '../../../../../HotelSeacher/front/src/components/Basic/BackTopBar.vue'
import FormDialog from '../components/FormDialog.vue';

export default {
  name: 'Trainings',
  components: {
    TrainingCard,
    BackTopBar,
    FormDialog
  },
  data () {
    return {
      trainings: [
        {
          name: 'Entreno 1',
          activities: []
        },
        {
          name: 'Entreno 2',
          activities: []
        },
        {
          name: 'Entreno 3',
          activities: []
        },
        {
          name: 'Entreno 4',
          activities: []
        },
        {
          name: 'Entreno 5',
          activities: []
        },
        {
          name: 'Entreno 6',
          activities: []
        },
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
