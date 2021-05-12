<template>
  <div class="add">
    <!-- <v-app class="addTodo">
      <v-text-field v-model="name" label="Add Todo" required></v-text-field>
      <v-btn depressed color="primary"> Primary </v-btn>
    </v-app> -->
    <form @submit="onSubmit">
      <input type="text" v-model="title" name="title" placeholder="Add New Todo" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data: function () {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    //What to do after submitting.
    onSubmit(e) {
      //Now, we are listening for the event and preventing the default behavior of the form.
      e.preventDefault();
      //Passing the title to addTodo fn
      this.addTodo(this.title);
    },
  },
  created() {
    this.addTodo();
  },
};
</script>

<style>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
