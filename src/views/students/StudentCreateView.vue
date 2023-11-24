<script>
import axios from "axios";

export default {
  name: "StudentCreateView",
  data() {
    return {
      model: {
        student: {
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          cardNumber: ''
        }
      }
    }
  },
  methods: {
    saveStudent() {
      axios.post('http://localhost:8080/v1/students', this.model.student)
          .then(res => {
            alert('Student was saved successful');
            this.model.student = {
              firstName: '',
              lastName: '',
              email: '',
              age: '',
              cardNumber: ''
            }
          }).catch(function (error) {
            // hangle error on UI site
      })
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Students</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">First Name</label>
          <input type="text" v-model="model.student.firstName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Last Name</label>
          <input type="text" v-model="model.student.lastName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" v-model="model.student.email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Age</label>
          <input type="text" v-model="model.student.age" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Card Number</label>
          <input type="text" v-model="model.student.cardNumber" class="form-control">
        </div>
        <div class="mb-3">
          <button type="button" @click="saveStudent" class="btn btn-primary">
            Save
          </button>&nbsp;
          <RouterLink to="/students" class="btn btn-primary">
            Back
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>