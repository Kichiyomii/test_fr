<template>
  <div class="quiz__item__cont">
    <div class="And" v-if="id != '1'">И</div>
    <p class="variable">Условие</p>
    <select v-model="quizSelector" class="select__variable" name="" id="">
      <option value="default">Выберите условие</option>
      <option value="age">Возраст респондента</option>
      <option value="typeCard">Тип карты лояльности</option>
      <option value="statusCard">Статус карты лояльности</option>
    </select>
    <div v-if="quizSelector == 'age'" class="quiz__type">
      <div v-for="diaposon in dia" :key="diaposon.id">
        <p class="type">Диапазон {{ diaposon.forid }}</p>
        <div class="forinpute">
          от &nbsp;
          <input v-model="diaposon.ot" class="number" type="text" /> &nbsp; до
          &nbsp;
          <input v-model="diaposon.do" class="number" type="text" />
        </div>
      </div>
      <button @click="addDia()" class="add">Добавить диапазон</button>
    </div>
    <div v-if="quizSelector == 'typeCard'" class="quiz__type mt">
      <div v-for="typec in type" :key="typec.id">
        <p class="type">Тип {{ typec.forid }}</p>
        <select v-model="typec.type" class="select__variable" name="" id="">
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="usual">Type</option>
        </select>
      </div>
      <button @click="addType()" class="add">Добавить тип</button>
    </div>
    <div v-if="quizSelector == 'statusCard'" class="quiz__type mt">
      <div v-for="stat in status" :key="stat.id">
        <p class="type">Тип {{ stat.forid }}</p>
        <select v-model="stat.status" class="select__variable" name="" id="">
          <option value="active">Активна</option>
          <option value="nonactive">Неактивна</option>
        </select>
      </div>
      <button @click="addStatys()" class="add">Добавить тип</button>
    </div>
    <button @click="deleteobj()" class="delete">Удалить условие</button>
  </div>
</template>

<script>
export default {
  props: {
    getter: {
      type: Boolean,
    },
    id: {
      type: [Number, String],
      required: true,
    },
  },
  mounted() {
    const button = document.getElementById("create");
    console.log(button);
    button.addEventListener("click", () => {
      this.emitter();
    });
  },
  data() {
    return {
      quizSelector: "default",
      counter: 1,
      dia: [
        {
          id: "1",
          forid: "1",
          ot: "",
          do: "",
        },
      ],
      type: [{ type: "gold", id: "1", forid: "1" }],
      status: [{ status: "active", id: "1", forid: "1" }],
    };
  },
  methods: {
    deleteobj() {
      this.$emit("delete", this.id);
    },
    emitter() {
      let obj = {};
      if (this.quizSelector == "default") {
        alert("Один или несколько параметров не выбраны");
      } else if (this.quizSelector == "age") {
        obj = this.dia;
        this.$emit("getobject", obj);
      } else if (this.quizSelector == "typeCard") {
        obj = this.type;
        this.$emit("getobject", obj);
      } else if (this.quizSelector == "statusCard") {
        obj = this.status;
        this.$emit("getobject", obj);
      }
      return 0;
    },
    addDia() {
      this.counter += 1;
      const newdia = {
        ot: "",
        do: "",
        forid: this.counter,
        id: Date.now(),
      };
      this.dia.push(newdia);
    },
    addType() {
      this.counter += 1;
      const newtype = {
        id: Date.now(),
        forid: this.counter,
        type: "gold",
      };
      this.type.push(newtype);
    },
    addStatys() {
      this.counter += 1;
      const newstatus = {
        id: Date.now(),
        forid: this.counter,
        status: "active",
      };
      this.status.push(newstatus);
    },
  },
};
</script>

<style>
.quiz__item__cont {
  width: 100%;
  padding: 8px 40px;
  border-bottom: 1px solid rgb(165, 165, 165);
}
.variable {
  display: inline-block;
  font-size: 18px;
  padding-top: 10px;
  font-weight: bold;
}
.select__variable {
  height: 45px;
  width: 70%;
  border: 1px solid rgb(184, 184, 184);
  border-radius: 6px;
  margin-left: 7vw;
  margin-top: 10px;
}
.quiz__type {
  margin-top: 20px;
}
.type {
  display: inline-block;
}
.number {
  height: 40px;
  border: 1px solid rgb(184, 184, 184);
  border-radius: 6px;
  padding-left: 10px;
}
.add {
  background-color: transparent;
  margin-top: 25px;
  border: 1px solid #9cb836;
  border-radius: 4px;
  height: 35px;
  width: 120px;
  text-align: center;
  color: #9cb836;
  cursor: pointer;
  margin-left: 11vw;
  transition: all 0.5s;
}
.add:hover {
  background-color: #9cb836;
  color: white;
}
.forinpute {
  display: inline-block;
  margin-left: 7vw;
  margin-top: 15px;
}
.mt {
  margin-left: 27px;
}
.delete {
  display: block;
  background-color: transparent;
  border: 1px solid #ff1001;
  border-radius: 4px;
  height: 35px;
  width: 120px;
  text-align: center;
  color: #ff1001;
  cursor: pointer;
  margin-left: auto;
  margin-top: 20px;
  margin-left: auto;
  transition: all 0.5s;
}
.delete:hover {
  background-color: #ff1201a6;
  color: white;
}
.delete:active {
  border: 1px solid #c4c4c4;
  background-color: #830900a6;
}
.And {
  position: relative;
  top: -35px;
  width: 60px;
  height: 50px;
  border: 1px solid #9cb836b0;
  border-radius: 5px;
  background-color: #9cb836b0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
