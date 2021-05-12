<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo";
import FilterTodo from "@/components/FilterTodo";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style></style>
