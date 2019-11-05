<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a href="http://localhost:8080/login"><h1>Login</h1></a>
    <a href="http://localhost:8080/login"><h1>Register</h1></a>
    <h3>{{name}}</h3>
    <p>{{desc}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      name: '',
      desc: ''
    }
  },
  mounted () {
    // axios get //

    // axios.get('http://praksa.test/api/login').then((res) => {
    //   console.log(res.data)
    //   this.name = res.data.name
    //   this.desc = res.data.description
    // })
    axios.post('http://praksa.test/api/login').then((res) => {
    
    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(`Date: ${res.headers.date}`);
    console.log(`Data: ${res.data}`);
    })
  }
}
</script>
