<script>
import axios from "axios";

export default {
  name: "StudentEditView",
  data() {
    return {
      students: []
    }
  },
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/v1/students?detailed=true').then(res => {
        this.students = res.data;
      }).catch(function (error) {
        // handle error on UI site
      })
    },

    deleteStudentById(studentId) {
      if (confirm('Are you sure, you want to delete this data?')) {
        axios.delete(`http://localhost:8080/v1/students/${studentId}`).then(res => {
          this.getStudents();
        }).catch(function (error) {
          // handle error on UI site
        })
      }
    }
  },
  mounted() {
    this.getStudents();
  }


}
</script>

<template>
  <div class="course">
    <div class="card">
      <div class="card-header">
        <h4>
          Students
          <RouterLink to="/students/create" class="btn btn-primary float-end">
            Add Student
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nro.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Card Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody v-if="students.length > 0">
            <tr v-for="(student, index) in this.students" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ student.firstName }}</td>
              <td>{{ student.lastName }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.age }}</td>
              <td>{{ student.cardNumber }}</td>
              <td>
                <RouterLink :to="{ path: '/students/' + student.id + '/edit' }" class="btn btn-success">
                  Edit
                </RouterLink>
                <button type="button" @click="deleteStudentById(student.id)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">There are no students</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>