<template>
  <div>
    <v-tabs
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="option in options"
        :key="option.name"
        ripple
      >
        {{ option.name }}
      </v-tab>
       <v-tab-item
        v-for="n in 2"
        :key="n"
      >
      <training-card v-for="training in trainings"
          class="trainingCard"
          :key="training.name"
          :url="'/trainings'"
          :methods="methods"
          :training="training"
      >
        <form-dialog/>
      </training-card>
       </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import TrainingCard from './TrainingCard.vue'
import FormDialog from './FormDialog.vue';

export default {
  name: 'Tabs',
  components: {
    TrainingCard,
    FormDialog
  },
  data () {
    return {
      options: [
        {
          name: 'Plan de Entrenamiento'
        },
        {
          name: 'Graphics'
        },
      ],
       trainings: [
        {
          name: 'PlanEntreno 1',
          activities: []
        },
        {
          name: 'PlanEntreno 2',
          activities: []
        },
        {
          name: 'PlanEntreno 3',
          activities: []
        },
        {
          name: 'PlanEntreno 4',
          activities: []
        },
        {
          name: 'PlanEntreno 5',
          activities: []
        },
        {
          name: 'PlanEntreno 6',
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
.trainingPlanCard {
  cursor: pointer;
}
</style>
