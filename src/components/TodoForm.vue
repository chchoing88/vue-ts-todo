<template>
  <div>
    <input
      type="text"
      :value="newTodo"
      @input="inputNewTodo"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoForm extends Vue {
  private newTodo = "";

  @Prop() readonly onAddTodo!: (text: string) => void;

  inputNewTodo(e: InputEvent) {
    if (e.target) {
      this.newTodo = (e.target as HTMLInputElement).value;
    }
  }

  initNewTodo() {
    this.newTodo = "";
  }

  addTodo() {
    // this.$store.dispatch("todos/addTodo", this.newTodo);
    // this.$emit("update:merline", "aa");
    this.onAddTodo(this.newTodo);
    this.initNewTodo();
  }
}
</script>
