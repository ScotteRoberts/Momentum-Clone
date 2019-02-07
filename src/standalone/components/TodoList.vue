<template>

  <section class="panel">
    <!-- DEV: Title and text input for ToDos -->
    <header>
      <p class="panel-heading has-text-centered">
        Todos
      </p>
      <div class="panel-block">
        <input
          type="checkbox"
          v-model="allDone"
          v-show="todos.length"
        >
        <p class="control">
          <input
            class="input"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            v-model="newTodo"
            @keyup.enter="addTodo(newTodo)"
          >
        </p>
      </div>
    </header>

    <!-- DEV: ToDo items with filters -->

    <body v-show="todos.length">
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        @dblclick="editTodo(todo)"
      >
        <div
          class="panel-block"
          v-if="editedTodo != todo"
        >
          <input
            type="checkbox"
            v-model="todo.completed"
          >
          <p
            class="control"
            :class="{ strike: todo.completed}"
          >
            {{ todo.title }}
          </p>
          <button
            class="delete"
            @click="removeTodo(todo)"
          ></button>
        </div>
        <div
          class="panel-block"
          v-else
        >
          <input
            class="control is-expanded"
            type="text"
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          >
        </div>

      </div>

      <p class="panel-tabs">
        <a
          @click="onFilterChange('all')"
          :class="{ 'is-active': visibility == 'all' }"
        >All</a>
        <a
          @click="onFilterChange('active')"
          :class="{ 'is-active': visibility == 'active' }"
        >Active</a>
        <a
          @click="onFilterChange('completed')"
          :class="{ 'is-active': visibility == 'completed' }"
        >Completed</a>
      </p>

      <!-- DEV: Remaining Number of ToDos -->

      <div class="panel-block">
        <p class="control is-small">
          <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
        </p>
        <div
          class="control"
          v-show="todos.length > remaining"
        >
          <!-- DEV: Clear Completed ToDos -->
          <button
            class="button"
            @click="removeCompleted"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </body>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
/**
 * Full spec-compliant TodoMVC with localStorage persistence
 *
 * Adaptation from Evan Yu's Vue.js MVCTODO Example
 */
export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      editedTodo: ""
    };
  },
  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    ...mapState("todo", ["todos", "visibility"]),
    ...mapGetters("todo", ["filteredTodos", "remaining"]),
    /**
     * Getter / Setter for Vuex "allDone" flag
     */
    allDone: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        });
      }
    }
  },

  filters: {
    /**
     * Adds an "s" character at the end of "item" if plural
     * @param {number} n
     * @returns {string}
     */
    pluralize: function(n) {
      return n === 1 ? "item" : "items";
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    /**
     * Adds single todo item to Vuex storeage
     * @param {Object} todo - new todo item
     */
    addTodo: function(todo) {
      this.$store.dispatch("todo/addTodo", todo);
      this.newTodo = "";
    },
    ...mapActions("todo", ["removeTodo", "onFilterChange", "removeCompleted"]),

    /**
     * Edits single todo item
     * @param {Object} - editable todo item
     */
    editTodo: function(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    /**
     * Finalizes edits on single todo item
     * @param {Object} - editable todo item
     */
    doneEdit: function(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },

    /**
     * Cancels edits on single todo item
     * @param {Object} - editable todo item
     */
    cancelEdit: function(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    }
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.strike {
  text-decoration: line-through;
}
</style>
