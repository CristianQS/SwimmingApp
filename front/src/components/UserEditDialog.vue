<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn small depressed color="grey" v-on="on">
        <v-icon color="white">settings</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Modify User</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Username" 
          v-model="editUser.username"
          counter
          maxlength="20"
          :rules="[rules.required]"
          required/>
        <v-text-field type="password" label="Password" v-model="password"/>
        <v-text-field type="password" label="Confirm Password"
        :disabled="diabledField" v-model="confirmPassword"/>
        <v-textarea label="Description" 
          outline v-model="editUser.description"
          counter
          maxlength="150"
          :rules="[rules.required]"
          required
          />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import { AUTHENTICATE } from '../store/types/UserTypes'

export default {
  name: 'UserEditDialog',
  data () {
    return {
      dialog: false,
      editUser: {},
      password: '',
      confirmPassword: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      if (this.password.length > 0) {
        if (this.password === this.confirmPassword) {
          this.editUser.password = this.password
        } else {
          alert(`password don't match`)
        }
      }
      if (this.editUser.username.length > 0 && this.editUser.description.length > 0) {
        this.$emit('modifyUser', this.editUser)
        this.dialog = !this.dialog
      }
    },
    ...mapActions({
      getUser: AUTHENTICATE
    })
  },
  computed: {
    diabledField () {
      return this.password.length == 0
    }
  },
  async created () {
    let user = await this.getUser()
    this.editUser = Object.assign({}, user)
    delete this.editUser.password
  }
}
</script>

<style>

</style>
