<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">

        <q-card v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '30%' }">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

              <q-input dense filled v-model="name" label="User Name" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type your username']">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input dense filled type="password" v-model="password" label="Password" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type your password']">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-toggle dense v-model="accept" label="I accept the license and terms" />


              <q-card-actions align="right">
                <q-btn dense label="Submit" type="submit" color="primary" @click.prevent="onSubmit" />
                <q-btn dense label="Reset" type="reset" color="accent" @click.prevent="onReset" />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>


<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  name: 'LoginPage',
  setup() {
    const $q = useQuasar()

    const name = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      name,
      password,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset() {
        name.value = null
        password.value = null
        accept.value = false
      }
    }
  }
}
</script>
<style>
.bg-image {
  /*background-image: url("lovepik-industrial-robot.jpg");*/
  background-color: linear-gradient(135deg, #0d31f9 0%, #e5b2ca 100%);
}
</style>
