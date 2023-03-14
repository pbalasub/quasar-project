<template>
  <q-page padding>

    <q-card v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
      <q-card-section class="bg-primary text-white">
        <div class="text-bold">
          User Master
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="q-pa-xs row">
            <div class=" q-pa-xs  col-6">
              <q-input dense v-model="customer.customerName" label="Customer Name" size="60" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Customer Name']">
              </q-input>
            </div>
            <div class="q-pa-xs col-6">
              <q-input dense v-model="customer.customerCode" label="Customer Code" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Customer Code']">
              </q-input>
            </div>

            <div class="q-pa-xs col-12">
              <q-input dense v-model="customer.address1" label="Address 1" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Address 1']">
              </q-input>
            </div>

            <div class=" q-pa-xs col-12">
              <q-input dense v-model="customer.address2" label="Address 2" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Address 2']">
              </q-input>
            </div>

            <div class="q-pa-xs  col-6">
              <q-input dense v-model="customer.city" label="City" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter City']">
              </q-input>
            </div>
            <div class="q-pa-xs  col-6">
              <q-input dense v-model="customer.state" label="State" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter State']">
              </q-input>
            </div>

            <div class=" q-pa-xs  col-6">
              <q-input dense type="tel" v-model="customer.phone" label="Phone" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter City']">
              </q-input>
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense type="tel" v-model="customer.fax" label="Fax" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter State']">
              </q-input>
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense type="email" v-model="customer.email" label="Email" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter City', isValidEmail]">
              </q-input>
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense type="url" v-model="customer.website" label="Website" outlined lazy-rules
                :rules="[val => val && val.length > 0]">
              </q-input>
            </div>
            <div class=" q-pa-xs  col-6">
              <q-select dense outlined v-model="customer.orgType" :options="orgTypes" label="Organization Type" />
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense v-model="customer.fax" label="Fax" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Fax']">
              </q-input>
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense v-model="customer.contactPerson" label="Contact Person" outlined lazy-rules
                :rules="[val => val && val.length > 0]" />
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense v-model="customer.mobile" label="mobile" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Mobile']">
              </q-input>
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense v-model="customer.eventScope" label="Scope of Event" outlined lazy-rules
                :rules="[val => val && val.length > 0]" />
            </div>
            <div class=" q-pa-xs  col-6">
              <q-input dense type="date" v-model="customer.eventDate" label="Inclusion Date" outlined lazy-rules
                :rules="[val => val && val.length > 0 || 'Enter Mobile']">
              </q-input>
            </div>
          </div>
          <q-card-actions align="right">
            <q-btn dense label="Submit" type="submit" color="primary" @click.prevent="onSubmit()" />
            <q-btn dense label="Reset" type="reset" color="accent" @click.prevent="onReset()" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script>
import CustomerService from 'src/server/CustomerService';

export default {
  name: 'CustomerPage',
  data() {
    return {
      customer: {
        customerName: "",
        customerCode: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        phone: "",
        fax: "",
        email: "",
        website: "",
        orgType: "",
        contactPerson: "",
        eventScope: "",
        eventDate: ""
      },
      orgTypes: [
        'Propeirtary', 'Public Ltd', 'Partnership', 'PSU/Gov', 'Private'
      ],
    }
  },
  methods: {
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Invalid email';
    },
    onSubmit() {
      var data = {
        customerName: this.customer.customerName,
        customerCode: this.customer.customerCode,
        address1: this.customer.address1,
        address2: this.customer.address2,
        city: this.customer.city,
        state: this.customer.state,
        phone: this.customer.phone,
        fax: this.customer.fax,
        email: this.customer.email,
        website: this.customer.website,
        orgType: this.customer.orgType,
        contactPerson: this.customer.contactPerson,
        eventScope: this.customer.eventScope,
        eventDate: this.customer.eventDate
      };
      console.log(this.customer);
      CustomerService.addCustomer(data);
      console.log(this.$q.version);
    },

    onReset() {
      name.value = null
      password.value = null
      accept.value = false
    },
  },
}

</script>

