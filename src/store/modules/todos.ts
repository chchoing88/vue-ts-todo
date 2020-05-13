import { Module, ActionContext } from "vuex";
import { RootState } from "@/store/index";
import Todo from "@/store/models/Todo";

interface Todos {
  todoList: Todo[];
}

const todos: Module<Todos, RootState> = {
  namespaced: true,
  state: {
    todoList: [new Todo("merlin")]
  },
  getters: { todoList: state => state.todoList },
  mutations: {
    SET_ADD_TODO(state, payload: string) {
      state.todoList = state.todoList.concat([new Todo(payload)]);
    },
    SET_DEL_TODO(state, payload: number) {
      state.todoList = state.todoList.filter(todo => todo.id !== payload);
    }
  },
  actions: {
    addTodo({ commit }, payload: string) {
      commit("SET_ADD_TODO", payload);
    },
    removeTodo({ commit }, payload: number) {
      commit("SET_DEL_TODO", payload);
    }
  }
};

export default todos;
