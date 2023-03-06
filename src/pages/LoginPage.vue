<template>
  <q-layout>
    <q-page-container>
      <q-page class="row justify-center items-center">

        <q-card class="my-card q-pa-md">
          <q-card-section class="bg-primary text-white glossy">
            <div class="text-h6">Login</div>
            <div class="text-subtitle2">Industrial Automation Solution (IAS)</div>
          </q-card-section>
          <q-separator />

          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-card-section>
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
            </q-card-section>

            <q-card-actions align="right">
              <q-btn dense label="Submit" type="submit" color="primary" />
              <q-btn dense label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </q-card-actions>
          </q-form>
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
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
