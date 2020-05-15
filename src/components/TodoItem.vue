<template>
  <div :class="{ done: todo.isDone }">
    <input
      type="checkbox"
      @change="toggleDoneTodo(todo.id)"
      :checked="todo.isDone"
    />
    <template v-if="todo.isEdit">
      <input
        type="text"
        :value="todo.name"
        @input="inputEditTodo"
        @keypress.enter="toggleEditTodo(todo.id, editTodo)"
      />
    </template>
    <template v-else>
      {{ todo.name }}
    </template>
    <button @click="deleteTodo(todo.id)">X</button>
    <button @click="toggleEditTodo(todo.id, editTodo)">
      {{ todo.isEdit ? "confirm" : "Edit" }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoModel from "@/store/models/Todo";

@Component
export default class TodoItem extends Vue {
  private editTodo = "";

  @Prop() readonly todo!: TodoModel; // ! -> Nullable 이라고합니다. 느낌표를 붙이면 null과 undefind를 허용합니다. 즉 초기화 하지 않아도 됩니다.
  @Prop() private onDeleteTodo!: (id: number) => void;
  @Prop() private onToggleDoneTodo!: (id: number) => void;
  @Prop() private onToggleEditTodo!: (id: number, name: string) => void;

  deleteTodo(id: number) {
    this.onDeleteTodo(id);
  }

  toggleDoneTodo(id: number) {
    this.onToggleDoneTodo(id);
  }

  toggleEditTodo(id: number, name: string) {
    this.onToggleEditTodo(id, name);
  }

  inputEditTodo(e: InputEvent) {
    if (e.target) {
      this.editTodo = (e.target as HTMLInputElement).value;
    }
  }
}
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
