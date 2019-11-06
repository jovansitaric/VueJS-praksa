<template>
  <div id="create-user-form">
    <form action="post" @submit.prevent="updateTask">
      <input v-model="title" required name="title" type="text" placeholder="enter title.." />
      <br />
      <br />

      <input
        v-model="description"
        required
        name="description"
        type="text"
        placeholder="enter description"
      />
      <br />
      <br />

      <button type="submit" class="button is-outlined is-primary">Update task</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateTask",

  data() {
    return {
      title: "",
      description: ""
    };
  },

  methods: {
    updateTask() {
      let taskId = this.$route.params.id;
      const URL = `http://praksa.test/api/tasks/${taskId}`;
      const access_token = localStorage.getItem("access_token");
      axios({
        method: "put",
        url: URL,
        headers: {
          Authorization: "Bearer " + access_token
        },
        data: {
          user_id: this.taskId,
          title: this.title,
          description: this.description
        }
      }).then(res => {
        this.$router.push({ name: "userHome" });
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>