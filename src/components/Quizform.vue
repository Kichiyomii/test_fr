<template>
  <div class="quiz__form__cont">
    <quiz-item class="item" />
  </div>
</template>

<script>
import QuizItem from "../components/QuizItem";
export default {
  components: {
    QuizItem,
  },
};
</script>

<style>
.item {
  border: 0.5px solid grey;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>
