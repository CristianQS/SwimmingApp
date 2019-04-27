<template>
  <div>
    <v-tabs grow>
      <v-tab>
      Training Plan
      </v-tab>
      <v-tab-item>
        <training-card v-for="training in trainings"
          class="trainingCard"
          :key="training.name"
          :url="url"
          :params="params"
          :methods="methods"
          :training="training"
        >
        <template v-slot:modify>
          <modify-form
          :type="'Training Plan'"
          :name="training.name"/>
        </template>
        </training-card>
      </v-tab-item>
      <v-tab>
        Time Keeping
      </v-tab>
      <v-tab-item>

      </v-tab-item>
      <v-tab>
        Graphics
      </v-tab>
      <v-tab-item></v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import TrainingCard from './TrainingCard.vue'
import ModifyForm from './ModifyForm.vue'

export default {
  name: 'Tabs',
  components: {
    TrainingCard,
    ModifyForm
  },
  data () {
    return {
      url: 'TRAININGS',
      params: {idPlan: 1},
      options: [
        {
          name: 'Plan de Entrenamiento'
        },
        {
          name: 'Graphics'
        }
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
.trainingPlanCard {
  cursor: pointer;
}
</style>
