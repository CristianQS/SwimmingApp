<template>
  <div>
    <v-tabs grow>
      <v-tab>
      Training Plan
      </v-tab>
      <v-tab-item>
        <draggable
        class="list-group"
        v-model="trainings"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
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
        </transition-group>
        </draggable>
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
import draggable from 'vuedraggable'

export default {
  name: 'Tabs',
  components: {
    TrainingCard,
    ModifyForm,
    draggable
  },
  data () {
    return {
      url: 'TRAININGS',
      params: {idPlan: 1},
      drag: false,
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
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
}
</script>

<style scoped>
.trainingPlanCard {
  cursor: pointer;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
