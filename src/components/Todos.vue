<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as completed</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>

      <span> <span class="complete-box"></span> = Complete </span>
    </div>

    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-bind:class="{ 'is-complete': todo.completed }"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
      >
        {{ todo.title }} <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
//It maps and gets from vuex to component
//mapGetters - get getters object frm module.
//mapActions - get actions from module
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  //1. For multiple actions
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]), //This is not yet called. We are just mapping it to component. We need to call where componet loads
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  //For Single action
  // methods: mapActions(['fetchTodos'])
  created() {
    this.fetchTodos(); //3. This will call the action.
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
