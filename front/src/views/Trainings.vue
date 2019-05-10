<template>
  <div>
    <back-top-bar/>
    <div>
      <v-layout align-center justify-center>
        <v-flex xs12 md6>
          <v-text-field prepend-inner-icon="search"></v-text-field>
        </v-flex>
      </v-layout>
      <h2>Plan de Entrenamiento</h2>
      <training-card v-for="training in trainings"
          class="trainingCard"
          :key="training.id"
          :url="url"
          :params="{idPlan: idplan, idTraining: training.id}"
          :methods="methods"
          :training="training"
          :newUpdate="updatetraining"
      >
      <template v-slot:modify>
        <training-modify-form
          :training="training"
          @updateInstance="updateInstance"
        />
      </template>
      </training-card>
    </div>
    <floating-button @click.native="dialog = !dialog">add</floating-button>
    <add-dialog
      :dialog="dialog"
      @isActivated="isDialogActivated"
    >
      <template v-slot:text>
        <training-form @training="changeTraining" />
      </template>
      <template v-slot:buttons>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
      </template>
    </add-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_TRAININGS, GET_TRAINING_BY_ID, ADD_TRAINING, MODIFY_TRAINING,
  CLONE_TRAINING, DELETE_TRAINING } from '../store/types/TrainingTypes'
import TrainingCard from '../components/TrainingCard.vue'
import BackTopBar from '../components/BackTopBar.vue'
import TrainingModifyForm from '../components/TrainingModifyForm.vue'
import FloatingButton from '../components/FloatingButton.vue'
import AddDialog from '../components/AddDialog.vue'
import TrainingForm from '../components/TrainingForm.vue'

export default {
  name: 'Trainings',
  components: {
    TrainingCard,
    BackTopBar,
    TrainingModifyForm,
    FloatingButton,
    AddDialog,
    TrainingForm
  },
  data () {
    return {
      dialog: false,
      url: 'ACTIVITIES',
      methods: {
        clone: (params) => this.cloneTraining(params),
        update: (params) => this.modifyTraining(params),
        delete: (params) => this.deleteTraining(params)
      },
      idplan: this.$route.params.idPlan,
      train: {},
      updatetraining: {}
    }
  },
  methods: {
    changeTraining (value) {
      this.train = value
    },
    updateInstance (value) {
      this.updatetraining = value
    },
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      var request = {
        plantraining_id: this.idplan,
        name: this.train.name,
        description: this.train.description,
        timetraining: this.train.timetraining
      }
      this.addTraining(request)
      this.dialog = !this.dialog
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    ...mapActions({
      getTrainings: GET_TRAININGS,
      addTraining: ADD_TRAINING,
      cloneTraining: CLONE_TRAINING,
      modifyTraining: MODIFY_TRAINING,
      deleteTraining: DELETE_TRAINING
    })
  },
  computed: {
    ...mapState({
      trainings: state => state.trainings
    })
  },
  created () {
    this.getTrainings(this.$route.params.idPlan)
  }
}
</script>

<style>
.trainingCard {
  cursor: pointer;
}
</style>
