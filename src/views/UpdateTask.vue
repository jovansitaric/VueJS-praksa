<template>
  <div id="create-user-form" v-if="model.task">
    <form action="post" @submit.prevent="updateTask">
      <input
        v-model="model.task.title"
        required
        name="title"
        type="text"
        style="text-align:center;"
      />
      <br />
      <br />

      <input
        v-model="model.task.description"
        required
        name="description"
        type="text"
        style="text-align:center;"
      />
      <br />
      <br />

      <button type="submit" class="button is-success">Update task</button>
      <br />
      <br />
    </form>
    <div id="task-notes">
      <div class="note-looper" v-for="note in model.notes" :key="note.id">
        <a @click="deleteNote" class="delete is-medium"></a>
        <div class="title">{{note.title}}</div>
        <div class="content">
          {{note.description}}
          <br />
        </div>
        <time datetime="2016-1-1">Created at: {{note.created_at}}</time>
      </div>
    </div>
    <br />
    <br />
    <div v-if="isClicked" id="create-task-div">
      <input v-model="notes.description" type="text" placeholder="Insert note title" required />
      <br />
      <br />
      <input v-model="notes.title" type="text" placeholder="Insert note description" required />
      <br />
      <br />
      <button @click="createNote" type="submit" class="button is-success">Create note</button>
    </div>
    <br />
    <button @click="isClicked = !isClicked" class="button is-info">+ Add</button>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateTask",

  data() {
    return {
      notes: {
        title: "New note title",
        description: "New note description"
      },
      isClicked: false,
      model: {}
    };
  },

  created() {
    this.getTask();
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
    },
    getTask() {
      let taskId = this.$route.params.id;
      const URL = `http://praksa.test/api/tasks/${taskId}`;
      const access_token = localStorage.getItem("access_token");
      axios({
        method: "get",
        url: URL,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + access_token
        }
      }).then(res => {
        this.model = res.data;
        console.log(this.model);
      });
    },
    createNote() {
      this.model.notes.push(this.notes);
    },
    deleteNote($id) {
        // this.model.notes.filter();
        console.log($id)
    }
  }
};
</script>

<style>
#task-notes {
  background: silver;
}

.note-looper {
  position: relative;
  width: 25%;
  display: inline-block;
  background: #ffd765;
  margin: 15px;
  padding: 3em;
  text-align: center;
}
.note-looper time {
  position: absolute;
  padding-bottom: 1em;
  bottom: 0;
  left: 0;
  right: 0;
}
.note-looper .delete {
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>