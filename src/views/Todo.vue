<template>
  <div class="todo">
    <h1>This is an Todo page</h1>
    <TodoForm :onAddTodo="onAddTodo" />
    <TodoList :todoList="todoList" :onDeleteTodo="onDeleteTodo" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";

@Component({
  components: {
    TodoForm,
    TodoList
  }
})
export default class Todo extends Vue {
  // todoList: TodoModel[] = this.$store.getters["todos/todoList"];

  // computed
  get todoList() {
    return this.$store.getters["todos/todoList"];
  }

  onDeleteTodo(id: number) {
    this.$store.dispatch("todos/removeTodo", id);
  }

  onAddTodo(newTodo: string) {
    this.$store.dispatch("todos/addTodo", newTodo);
  }
}
</script>
