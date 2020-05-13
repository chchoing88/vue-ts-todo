<template>
  <div>
    <h2>TodoList</h2>
    <div v-for="todo in todoList" :key="todo.id">
      <!-- <TodoItem :todo="todo" :onDeleteTodo="onDeleteTodo" /> -->
      <TodoItem :props="{ todo, onDeleteTodo }" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoModel from "@/store/models/Todo";

import TodoItem from "@/components/TodoItem.vue";

// https://class-component.vuejs.org/guide/class-component.html#other-options
@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  @Prop() private todoList!: TodoModel[];
  @Prop() private onDeleteTodo!: (id: number) => void;
}
</script>
