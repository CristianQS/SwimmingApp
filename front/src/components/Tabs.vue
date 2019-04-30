<template>
  <div>
    <v-tabs grow>
      <v-tab>
      Training Plan
      </v-tab>
      <v-tab-item>
        <draggable
          class="list-group"
          v-model="plantraings"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
        >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <training-card v-for="plantraing in plantraings"
              class="trainingCard"
              :key="plantraing.name"
              :url="url"
              :params="plantraing"
              :methods="methods"
              :training="plantraing"
              >
              <template v-slot:modify>
                <modify-form
                :type="'Training Plan'"
                :name="plantraing.name"/>
              </template>
            </training-card>
          </transition-group>
        </draggable>
      </v-tab-item>
      <v-tab>
        Graphics
      </v-tab>
      <v-tab-item></v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { GET_PLANTRAININGS, DELETE_TRAINING_PLAN } from '../store/types/TrainingPlanTypes'
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
      drag: false,
      plantraings: [
       
      ],
      methods: {
        clone: this.clone,
        delete: (id) => this.deletePlanTrainings(id)
      }
    }
  },
  methods: {
    clone () {
      console.log('clonar')
    },
    ...mapActions({
      getPlanTrainings: GET_PLANTRAININGS,
      deletePlanTrainings: DELETE_TRAINING_PLAN
    })
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  },
  created () {
    let user = {
      userid: 1
    }
    this.getPlanTrainings(user).then((response) => {
      this.plantraings = response.data
    })
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
