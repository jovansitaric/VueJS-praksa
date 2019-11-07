<template>
  <div id="create-user-form">
    <form action="post" @submit.prevent="createTask">
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

      <button type="submit" class="button is-outlined is-primary">Create task</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateTask",

  data() {
    return {
      user_id: "",
      title: "",
      description: ""
    };
  },

  methods: {
    createTask() {
      const URL = `http://praksa.test/api/tasks`;
      const access_token = localStorage.getItem("access_token");
      console.log(access_token);
      axios({
        method: "post",
        url: URL,
        headers: {
          Authorization: "Bearer " + access_token
        },
        data: {
          user_id: "",
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