<template>
    <div class="gridLayout">
        <LeftContent class="leftcont__main"/>
        <quizform/>
    </div>
</template>

<script>
import Quizform from "../components/Quizform"
import LeftContent from "../components/LeftContent"
    export default {
        components: {
            Quizform,
            LeftContent,
        },
    }
</script>

<style>
.gridLayout{
    display: grid;
    grid-template-columns: 10% 90%;
}
.leftcont__main{
    min-height: 100vh;
    border-right: 0.5px solid rgb(232 232 232);
    padding: 40px 5% 0 5%;
}
</style>