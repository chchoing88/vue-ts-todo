import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import todos from "@/store/modules/todos";

Vue.use(Vuex);

export interface RootState {
  data: string;
}

const store: StoreOptions<RootState> = {
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    todos
  }
};

export default new Vuex.Store(store);
