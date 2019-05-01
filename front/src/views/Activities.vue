<template>
  <div>
    <back-top-bar/>
    <div>
      <v-layout align-center justify-center>
        <v-flex xs12 md6>
          <v-text-field prepend-inner-icon="search"></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Entreno</h2>
      <training-card v-for="activity in activities"
          class="trainingCard"
          :key="activity.id"
          :methods="methods"
          :training="activity"
          :newUpdate="updateActivity"
          >
          <template v-slot:modify>
            <activity-form :activity="activity"
            @activity="modifyActivity"
            ></activity-form>
          </template>
      </training-card>
    </div>
    <floating-button @click.native="dialog = !dialog">
      add
    </floating-button>
    <add-dialog 
      :dialog="dialog"
      @isActivated="isDialogActivated">
        <template v-slot:text>
          <activity-form :activity="activity" @activity="changeActivity"/>
        </template>
        <template v-slot:buttons>
          <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
        </template>
    </add-dialog>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { GET_ACTIVITIES, ADD_ACTIVITY, MODIFY_ACTIVITY,
  DELETE_ACTIVITY } from '../store/types/ActivityTypes'
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../components/BackTopBar.vue'
import ActivityForm from '../components/ActivityForm.vue'
import ModifyForm from '../components/ModifyForm.vue'
import FloatingButton from '../components/FloatingButton.vue'
import AddDialog from '../components/AddDialog.vue'

export default {
  name: 'Activities',
  components: {
    TrainingCard,
    BackTopBar,
    ActivityForm,
    ModifyForm,
    FloatingButton,
    AddDialog
  },
  data () {
    return {
      dialog: false,
      idplan: this.$route.params.idPlan,
      idtraining: this.$route.params.idTraining,
      newActivity: {},
      updateActivity: {},
      activity : {
        series: 1,
        meters: 100,
        exercise: '',
        style: '',
        type: '',
        rhythm: '',
        training: this.$route.params.idTraining
      },
      methods: {
        clone: (params) => this.addActivity(params),
        update: (params) => this.modifyActivity(params),
        delete: (params) => this.deleteActivity(params)
      },
    }
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      let params = {
        activity: this.newActivity,
        plantraining_id: this.idplan,
        training_id: this.idtraining,
      }
      this.addActivity(params)
      this.dialog = !this.dialog
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    changeActivity (value) {
      this.newActivity = value
    },
    modifyActivity (value) {
      this.updateActivity = value
    },
    ...mapActions({
      getActivities: GET_ACTIVITIES,
      addActivity: ADD_ACTIVITY,
      modifyActivity: MODIFY_ACTIVITY,
      deleteActivity: DELETE_ACTIVITY
    })
  },
  computed: {
    ...mapState({
      activities: state => state.activities
    })
  },
  created () {
    let params = {
      plantraining_id: this.idplan,
      training_id: this.idtraining,
    }
    this.getActivities(params)
  }
}
</script>

<style>
.trainingCard {
  cursor: pointer;
}
</style>
