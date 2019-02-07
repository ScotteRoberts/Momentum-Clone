const state = {
  show: false,
  todos: [],
  visibility: "all"
};

// visibility filters
const filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todo.completed;
    });
  },
  completed: function(todos) {
    return todos.filter(function(todo) {
      return todo.completed;
    });
  }
};

const mutationTypes = {
  SET_SHOW: "SET_SHOW",
  ADD_NEW_TODO: "ADD_NEW_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  REMOVE_COMPLETED_TODOS: "REMOVE_COMPLETED_TODOS",
  ON_VISIBILITY_CHANGE: "ON_VISIBILITY_CHANGE"
};

const mutations = {
  [mutationTypes.SET_SHOW](state, value) {
    state.show = value;
  },
  [mutationTypes.ADD_NEW_TODO](state, value) {
    state.todos.push({
      title: value,
      completed: false
    });
  },
  [mutationTypes.REMOVE_TODO](state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  [mutationTypes.REMOVE_COMPLETED_TODOS](state) {
    // Check this out later...
    state.todos = filters.active(state.todos);
  },
  [mutationTypes.ON_VISIBILITY_CHANGE](state, visibility) {
    state.visibility = visibility;
  }
};

const actions = {
  setShow: ({ commit }, value) => {
    commit(mutationTypes.SET_SHOW, value);
  },
  addTodo: ({ commit }, newTodo) => {
    var value = newTodo && newTodo.trim();
    if (!value) {
      return;
    }
    commit(mutationTypes.ADD_NEW_TODO, value);
  },
  removeTodo: ({ commit }, todo) => {
    commit(mutationTypes.REMOVE_TODO, todo);
  },
  onFilterChange: ({ commit }, visibility) => {
    if (filters[visibility]) {
      commit(mutationTypes.ON_VISIBILITY_CHANGE, visibility);
    } else {
      commit(mutationTypes.ON_VISIBILITY_CHANGE, "all");
    }
  },
  removeCompleted: ({ commit }) => {
    commit(mutationTypes.REMOVE_COMPLETED_TODOS);
  }
};

const getters = {
  filteredTodos: state => {
    return filters[state.visibility](state.todos);
  },

  remaining: state => {
    return filters.active(state.todos).length;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  filters,
  namespaced: true
};
