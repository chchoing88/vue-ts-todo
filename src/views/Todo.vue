<template>
  <div class="todo">
    <h1>This is an Todo page</h1>
    <TodoForm :onAddTodo="onAddTodo" />
    <TodoList
      :todoList="todoList"
      :onDeleteTodo="onDeleteTodo"
      :onToggleDoneTodo="onToggleDoneTodo"
      :onToggleEditTodo="onToggleEditTodo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  GET_TODOLIST,
  addTodo,
  removeTodo,
  toggleDoneTodo,
  toggleEditTodo
} from "@/store/modules/todos";

import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";

// https://github.com/vuejs/vuex/issues/564#issuecomment-270379751
@Component({
  components: {
    TodoForm,
    TodoList
  }
})
export default class Todo extends Vue {
  // computed
  get todoList() {
    console.log(this.$store);
    // this.$store.getter["todos/todoList"]
    return this.$store.getters[GET_TODOLIST];
  }

  onAddTodo(newTodo: string) {
    // this.$store.dispatch("todos/addTodo", newTodo);
    this.$store.dispatch(addTodo(newTodo));
  }

  onDeleteTodo(id: number) {
    // this.$store.dispatch("todos/removeTodo", id);
    this.$store.dispatch(removeTodo(id));
  }

  onToggleDoneTodo(id: number) {
    // this.$store.dispatch("todos/toggleDoneTodo", id);
    this.$store.dispatch(toggleDoneTodo(id));
  }
  onToggleEditTodo(id: number, name: string) {
    this.$store.dispatch(toggleEditTodo(id, name));
  }
}
</script>
