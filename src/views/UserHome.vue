<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Joe Doe</p>
          <p class="subtitle is-6">@joedoe</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'UserHome',
    mounted () {
      if (localStorage.getItem('access_token')) {
        console.log("Token in use");
      
      } 
      else {
        console.log("sign in");
        this.$router.push({ name: '/' })
        
      }
    }
}

</script>

<style>
  .card {
    width: 20%;
    margin: 0 auto;
  }
</style>