<template>
    <div id="login">
        <h1>Login page</h1> <br>

        <form class="form-signin" @submit.prevent="login">

        <label for="email">E-mail</label> <br><br>
        <input required type="email" v-model="email" placeholder="Enter e-mail.."> <br><br>
        <label for="password">Password</label> <br><br>
        <input required type="password" v-model="password" placeholder="Enter password.."> <br><br>

        <button type="submit" class="button is-outlined is-primary">Submit</button>

        </form>

    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login () {
            const t = this
            axios.post("http://praksa.test/api/login", {
                email: this.email,
                password: this.password,
                // email: 'example@example.com',
                // password: 'password1234',
            })
            .then(function (response) {
                console.log(response.data.success.token);
                window.localStorage.setItem('access_token', response.data.success.token);
                t.$router.push({ name: 'userHome' })
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>