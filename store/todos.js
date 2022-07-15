export const state = () => ({
  todoList: [],
});

export const getters = {
  all(state) {
    return state.todoList;
  },
  progress(state) {
    return state.todoList.filters(function (item) {
      return !item.isComplete;
    });
  },
  done(state) {
    return state.todoList.filters(function (item) {
      return item.isComplete;
    });
  },
};

export const mutations = {
  store(state, data) {
    state.todoList = data;
  },
};

export const actions = {
  getTodoList(vuexContext) {
    return this.$axios
      .$get("https://62d11552dccad0cf176040cb.mockapi.io/todo/todos")
      .then((res) => {
        vuexContext.commit("store", res);
      });
  },
};
