<template>
<div class="container pb-5 pt-5">
 
    <div class="row">
       

        <div class="col">

            <content-container>

                <h2 class="text-center">Greetings: User</h2>

            </content-container>
           

        </div>

    </div>



    <div class="row pt-5">
        <div class="col-md-4">

            <app-weather></app-weather>

        </div>

        <div class="col-md-8">

            <app-news></app-news>

        </div>

    </div>



    <div class="row pt-5">
        <div class="col-md-6">

            <app-todo></app-todo>

        </div>

        <div class="col-md-6">
            <app-notes></app-notes>
        </div>

    </div>



</div>

</template>

<script>

import News from './vue-modules/News.vue';
import Notes from './vue-modules/Notes.vue';
import Todo from './vue-modules/Todo.vue';
import Weather from './vue-modules/Weather.vue';
import appContainer from './vue-modules/Content_Container'
import ContentContainer from './vue-modules/Content_Container.vue';


export default {
    
    components: {
        appNews: News,
        appNotes: Notes,
        appTodo: Todo,
        appWeather: Weather,
        appContainer,
        ContentContainer
       
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
