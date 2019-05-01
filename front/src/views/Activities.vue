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
          :training="activity">
          <template v-slot:modify>
            <activity-form></activity-form>
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
          <activity-form @activity="changeActivity"/>
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
      newActivity: {},
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
    },
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      this.activities.push(this.newActivity)
      this.dialog = !this.dialog
    },
    isDialogActivated (value) {
      this.dialog = value
    },
    changeActivity (value) {
      this.newActivity = value
    }
  },
  created () {

  }
}
</script>

<style>
.trainingCard {
  cursor: pointer;
}
</style>
