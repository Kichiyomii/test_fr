<template>
  <div class="quiz__form__cont">
    <div class="header">
      <a href="" class="link">Параметры</a><a href="" class="link">Вопросы</a
      ><a href="" class="link">Логика</a><a href="" class="link">Условия</a
      ><a href="" class="link">Респонденты</a>
    </div>
    <transition-group name="quiz">
      <quiz-item
        ref="QuizItem"
        v-for="item in items"
        :getter="getter"
        :id="item.id"
        :key="item.id"
        @getobject="getobj"
        class="item"
        @delete="deleteobj"
      />
    </transition-group>
    <button class="buttonnew" @click="newitem()">
      Нажмите, что бы добавить новое условие выборки. Все условия связываются
      между собой логическим оператором "И"
    </button>
    <button class="next" id="create" @click="sendler()">Далее</button>
  </div>
</template>

<script>
import QuizItem from "../components/QuizItem";
import api from "../api"
export default {
  components: {
    QuizItem,
  },
  data() {
    return {
      counter: 1,
      items: [{ id: "1", forid: "1" }],
      arr: [],
      getter: false,
    };
  },
  methods: {
    deleteobj(data) {
      this.items = this.items.filter((p) => p.id !== data);
    },
    //Здесь запрос на Api, только у меня нет вашего api, поэтому я сделаю запрос в никуда с выводом в консоль
    async sendler() {
        const post = this.arr
        console.log(post)
        const response = await api.quiz.writepost(post) 
    },
    getobj(data) {
      this.arr.push(data);
      console.log(this.arr);
    },
    newitem() {
      this.counter += 1;
      const obj = {
        id: Date.now(),
        forid: this.counter,
      };
      this.items.push(obj);
    },
  },
};
</script>

<style>
.quiz__form__cont {
  padding: 4% 10%;
}
.item {
  border-radius: 3px;
}
.buttonnew {
  width: 100%;
  background-color: transparent;
  border: 0.5px solid #adb6b9;
  border-radius: 5px;
  padding: 5% 10%;
  font-weight: 700;
  color: #64a873;
  cursor: pointer;
  transition: all 0.5s;
  -webkit-box-shadow: 0px 10px 10px 3px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 10px 10px 3px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 10px 10px 3px rgba(34, 60, 80, 0.6);
}
.buttonnew:hover {
  background-color: #9ae2aabd;
}
.buttonnew:active {
  border: 0.5px solid #656768;
  background-color: #b8b8b8bd;
}
.quiz-enter-active,
.quiz-leave-active {
  transition: all 1s;
}
.quiz-enter, .quiz-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.next {
  background-color: transparent;
  margin-top: 25px;
  border: 1px solid #9cb836;
  border-radius: 4px;
  height: 35px;
  width: 120px;
  text-align: center;
  color: #9cb836;
  cursor: pointer;
  float: right;
  transition: all 0.5s;
}
.next:hover {
  background-color: #9cb836;
  color: white;
}
.header {
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 0.5px solid #9cb836;
  display: block;
  width: 100%;
  display: flex;
  color: #9cb836;
  font-weight: bold;
  justify-content: space-evenly;
  
}
.link {
  text-decoration: none;
  color: #9cb836;
}
</style>
