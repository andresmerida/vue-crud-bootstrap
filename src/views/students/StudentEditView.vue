<script>
import axios from "axios";

export default {
  name: "StudentEditView",
  data() {
    return {
      studentId: '',
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
    getStudentById(studentId) {
      axios.get(`http://localhost:8080/v1/students/${studentId}`).then(res => {
        this.model.student = res.data;
      }).catch(function (error) {
        // handle error on UI site
      })
    },
    editStudent() {
      axios.put(`http://localhost:8080/v1/students/${this.studentId}`, this.model.student)
          .then(res => {
            alert('Student was Edited successful');
          }).catch(function (error) {
            // handle error on UI site
      })
    }
  },
  mounted() {
    this.studentId = this.$route.params.id;
    this.getStudentById(this.studentId);
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Student</h4>
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
          <button type="button" @click="editStudent" class="btn btn-primary">
            Edit
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