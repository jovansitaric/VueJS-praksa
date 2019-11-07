<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h3 class="title is-4">{{model.user.name}}</h3>
          <p class="subtitle is-6">{{model.user.email}}</p>
        </div>
      </div>
    </div>
    <br />    
    <div class="tasks">
      <ul>
        <li :key="task.id" v-for="task in model.user.tasks">
          {{task.id}} . {{ task.title }} - {{task.created_at}} <br>
          <div>
            <span id="update-task">
                <button @click="updateTask(task.id, task.title, task.description)" class="button is-info">Edit</button>
            </span>
            <span id="delete-task">
                <button @click="deleteTask(task.id)" class="button is-danger">Delete</button>
            </span>
          <br />
          <br />
          </div>          
        </li>
      </ul>

      <button @click="createNewTask()" class="button is-success">Create new task</button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserHome",
  mounted() {
    this.fetchUserDetails();
    // if (localStorage.getItem('access_token')) {
    //   console.log("Token in use");
    //   this.getUserData();
    // }
    // else {
    //   console.log("sign in");
    //   this.$router.push({ name: '/' })
    // }
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    fetchUserDetails() {
      const access_token = localStorage.getItem("access_token");
      const URL = `http://praksa.test/api/tasks`;
      axios({
        method: "get",
        url: URL,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + access_token
        }
      }).then(res => {
        this.model = res.data;
      });
      // axios.get("http://praksa.test/api/tasks")
      //      .then(function (res) {
      //        t.tasks = res.data.id
      //       //  console.log(this.getTemp)
      //        console.log(res)
      //        console.log(t.tasks)
      //      })
      //      .catch((e) => {
      //         console.error(e)
      //      })
    },
    createNewTask() {
      this.$router.push({ name: "createTask" });
    },
    updateTask(taskId, title, description) {
      this.$router.push({ name: "updateTask", params: { id: taskId, title: title, description: description} });
      console.log(taskId);
    },
    deleteTask(taskId) {
      const access_token = localStorage.getItem("access_token");
      axios({
        method: "delete",
        url: `http://praksa.test/api/tasks/${taskId}`,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + access_token
        }
      }).then(res=>{
          this.fetchUserDetails()
          this.$router.push({ name: 'userHome'})
          console.log(res)
      });
    }
  }
};
</script>

<style>
.card {
  width: 30%;
  margin: 0 auto;
}
</style>