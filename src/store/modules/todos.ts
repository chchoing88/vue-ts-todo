import { Module } from "vuex";
import { RootState } from "@/store/index";
import Todo from "@/store/models/Todo";

interface Todos {
  todoList: Todo[];
}
// 액션 타입
const ADD_TODO = "todos/addTodo" as const;
const REMOVE_TODO = "todos/removeTodo" as const;
const TOGGLE_DONE_TODO = "todos/toggleDoneTodo" as const;

// 액션 생성자
export const addTodo = (newTodo: string) => ({ type: ADD_TODO, newTodo });
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, id });
export const toggleDoneTodo = (id: number) => ({ type: TOGGLE_DONE_TODO, id });

type AddTodo = ReturnType<typeof addTodo>;
type RemoveTodo = ReturnType<typeof removeTodo>;
type ToggleDoneTodo = ReturnType<typeof toggleDoneTodo>;

// 모듈
const todos: Module<Todos, RootState> = {
  namespaced: true,
  state: {
    todoList: [new Todo("merlin")]
  },
  getters: { todoList: state => state.todoList },
  mutations: {
    SET_ADD_TODO(state, payload: AddTodo) {
      state.todoList = state.todoList.concat([new Todo(payload.newTodo)]);
    },
    SET_REMOVE_TODO(state, payload: RemoveTodo) {
      state.todoList = state.todoList.filter(todo => todo.id !== payload.id);
    },
    SET_TOGGLE_DONE_TODO(state, payload: ToggleDoneTodo) {
      state.todoList = state.todoList.map(todo => {
        if (todo.id === payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    }
  },
  actions: {
    addTodo({ commit }, payload: AddTodo) {
      commit("SET_ADD_TODO", payload);
    },
    removeTodo({ commit }, payload: RemoveTodo) {
      commit("SET_REMOVE_TODO", payload);
    },
    toggleDoneTodo({ commit }, payload: ToggleDoneTodo) {
      commit("SET_TOGGLE_DONE_TODO", payload);
    }
  }
};

export default todos;
