<template>
    <content-container>
        <h2>Weather</h2>
              <img class="img-fluid m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9V5ISyZ2rQ-484bvqVLg0oN29LSGfOUBhbg&usqp=CAU" alt="">
              <h4>Current Temp: 60</h4>
              <h4>Wind Speed: 5 mph <b>SW</b></h4>
              <button class="btn btn-primary mt-3">See 7 day forecast</button>
    </content-container>

   
</template>

<script>
import ContentContainer from './Content_Container.vue';

export default {
    components:{
        ContentContainer
    }
}
</script>

<style lang="scss" scoped>

</style>