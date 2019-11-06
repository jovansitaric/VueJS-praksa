<template>
  <div>
    <h1>Register page</h1>

    <form class="form-register">
      <label for="email">E-mail</label>
      <br />
      <br />
      <input required type="email" v-model="email" placeholder="insert email.." />
      <br />
      <br />
      <label for="password">Password</label>
      <br />
      <br />
      <input required type="password" v-model="password" placeholder="insert password.." />
      <br />
      <br />

      <button class="button is-outlined is-primary" @click="register">Submit</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style>
</style>