<template>
  <div>
    <v-tabs grow>
      <v-tab>
      Training Plan
      </v-tab>
      <v-tab-item>
        <div v-if="plantraings.length === 0">
          <p>Not Trainings Found</p>
        </div>
        <training-card v-for="plantraing in plantraings"
          class="trainingCard"
          :key="plantraing.id"
          :url="url"
          :params="{idPlan:plantraing.id}"
          :methods="methods"
          :training="plantraing"
          :newUpdate="params"
          :message="'Modify Plan Training'"
          >
          <template v-slot:modify>
            <modify-form
            @updateInstance="updateInstance"
            :plantraining="plantraing"/>
          </template>
        </training-card>
      </v-tab-item>
      <v-tab v-if="user.id == 1 || user.id == 2">
        Graphics
      </v-tab>
      <v-tab-item>
        <chart v-if="activities.length > 0" :usersClub="usersClub"></chart>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_PLANTRAININGS, DELETE_TRAINING_PLAN,
  ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN, CLONE_TRAINING_PLAN } from '../store/types/TrainingPlanTypes'
import TrainingCard from './TrainingCard.vue'
import ModifyForm from './ModifyForm.vue'
import draggable from 'vuedraggable'
import Chart from './Chart.vue'

export default {
  name: 'Tabs',
  components: {
    TrainingCard,
    ModifyForm,
    draggable,
    Chart
  },
  data () {
    return {
      url: 'TRAININGS',
      loading: false,
      drag: false,
      params: {},
      methods: {
        clone: (plantraining) => this.clonePlanTrainings(plantraining),
        update: (params) => this.modifyPlanTraining(params),
        delete: (id) => this.deletePlanTrainings(id)
      }
    }
  },
  methods: {
    ...mapActions({
      getPlanTrainings: GET_PLANTRAININGS,
      clonePlanTrainings: CLONE_TRAINING_PLAN,
      deletePlanTrainings: DELETE_TRAINING_PLAN,
      modifyPlanTraining: MODIFY_TRAINING_PLAN
    }),
    updateInstance (value) {
      this.params = value
    }
  },
  computed: {
    ...mapState({
      plantraings: state => state.plantrainings,
      activities: state => state.activities,
      usersClub: state => state.usersClub,
      user: state => state.user
    }),
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
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
