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
          <h3 class="title is-4">Joe Doe</h3>
          <p class="subtitle is-6">@joedoe</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br />
      </div>
      <div id="test">
          {{title}}
          {{description}}
      </div>
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
      title: "",
      description: ""
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
        this.title = res.data.data.title
        this.description = res.data.data.description
        console.log(res)
        console.log(this.title)
        console.log(access_token)
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
    }
  }
};
</script>

<style>
.card {
  width: 20%;
  margin: 0 auto;
}
</style>