<template>
  <div>
    {{ props.todo.name }}
    <button @click="deleteTodo(props.todo.id)">X</button>
    <button>Done</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoModel from "@/store/models/Todo";

type TodoItemProps = {
  readonly todo: TodoModel;
  onDeleteTodo: (id: number) => void;
};

@Component
export default class TodoItem extends Vue {
  // @Prop() readonly todo!: TodoModel; // ! -> Nullable 이라고합니다. 느낌표를 붙이면 null과 undefind를 허용합니다. 즉 초기화 하지 않아도 됩니다.
  // @Prop() private onDeleteTodo!: (id: number) => void;

  @Prop() private props!: TodoItemProps;

  deleteTodo(id: number) {
    this.props.onDeleteTodo(id);
  }
}
</script>
