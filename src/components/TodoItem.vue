<template>
  <div :class="{ done: todo.isDone }">
    <input
      type="checkbox"
      @change="toggleDoneTodo(todo.id)"
      :checked="todo.isDone"
    />
    {{ todo.name }}
    <button @click="deleteTodo(todo.id)">X</button>
    <button>update</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoModel from "@/store/models/Todo";

@Component
export default class TodoItem extends Vue {
  @Prop() readonly todo!: TodoModel; // ! -> Nullable 이라고합니다. 느낌표를 붙이면 null과 undefind를 허용합니다. 즉 초기화 하지 않아도 됩니다.
  @Prop() private onDeleteTodo!: (id: number) => void;
  @Prop() private onToggleDoneTodo!: (id: number) => void;

  deleteTodo(id: number) {
    this.onDeleteTodo(id);
  }

  toggleDoneTodo(id: number) {
    this.onToggleDoneTodo(id);
  }
}
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
