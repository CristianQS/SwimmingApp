<template>
  <v-dialog v-model="isActivated" max-width="600px">
      <v-card>
        <v-card-title>
        <span class="headline">Modify Training</span>
        </v-card-title>
        <v-card-text>
          <activity-form></activity-form>
        </v-card-text>
         <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Save</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import ActivityForm from './ActivityForm.vue'

export default {
  name: 'AddActivityDialog',
  components: {
    ActivityForm
  },
  props: {
    dialog: { type: Boolean, required: true }
  },
  data () {
    return {
      isActivated: this.dialog
    }
  },
  methods: {
    closeDialog () {
      this.isActivated = false
      this.$emit('closeDialog', this.isActivated)
    }
  },
  watch: {
    dialog: function() {
      this.isActivated = this.dialog
    }
  }
}
</script>

<style>

</style>
