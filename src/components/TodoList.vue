<template>
  <div>
    <h2>TodoList</h2>
    <div v-for="todo in todoList" :key="todo.id">
      <TodoListItem
        :todo="todo"
        :onDeleteTodo="onDeleteTodo"
        :onToggleDoneTodo="onToggleDoneTodo"
        :onToggleEditTodo="onToggleEditTodo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoModel from "@/store/models/Todo";

import TodoListItem from "@/components/TodoListItem.vue";

// https://class-component.vuejs.org/guide/class-component.html#other-options
@Component({
  components: {
    TodoListItem
  }
})
export default class TodoList extends Vue {
  @Prop() private todoList!: TodoModel[];
  @Prop() private onDeleteTodo!: (id: number) => void;
  @Prop() private onToggleDoneTodo!: (id: number) => void;
  @Prop() private onToggleEditTodo!: (id: number, name: string) => void;
}
</script>
