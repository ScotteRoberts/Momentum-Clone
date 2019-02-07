<template>
  <nav class="panel">
    <p class="panel-heading has-text-centered">
      General
    </p>
    <p class="panel-block label is-marginless">
      Show
    </p>

    <!--  HACK: Don't know how to display different computed properties
          in an array to user v-for... Look up later. -->
    <label class="panel-block">
      <input
        v-model="showLinks"
        type="checkbox"
      >
      <div>Links</div>
    </label>
    <label class="panel-block">
      <input
        v-model="showSearch"
        type="checkbox"
      >
      <div>Search</div>
    </label>
    <label class="panel-block">
      <input
        v-model="showWeather"
        type="checkbox"
      >
      <div>Weather</div>
    </label>
    <label class="panel-block">
      <input
        v-model="showFocus"
        type="checkbox"
      >
      <div>Focus</div>
    </label>
    <label class="panel-block">
      <input
        v-model="showQuote"
        type="checkbox"
      >
      <div>Quote</div>
    </label>
    <label class="panel-block">
      <input
        v-model="showTodo"
        type="checkbox"
      >
      <div>Todos</div>
    </label>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
/**
 * Controls the display items in the application.
 */
export default {
  data() {
    return {};
  },
  computed: {
    /** Getter / Setter for LinksList Component Visibility */
    showLinks: {
      get: function() {
        return this.$store.state.link.showLinks;
      },
      set: function(value) {
        this.$store.dispatch("link/setShowLinks", value);
      }
    },
    /**
     * Not Currently Supported:
     * Getter / Setter for BookmarksBar Visibility
     */
    showBookmarksBar: {
      get: function() {
        return this.$store.state.link.showBookmarksBar;
      },
      set: function(value) {
        this.$store.dispatch("link/setShowBookmarksBar", value);
      }
    },
    /** Getter / Setter for Search Component Visibility */
    showSearch: {
      get: function() {
        return this.$store.state.search.show;
      },
      set: function(value) {
        this.$store.dispatch("search/setShow", value);
      }
    },
    /** Getter / Setter for Weather Component Visibility */
    showWeather: {
      get: function() {
        return this.$store.state.weather.show;
      },
      set: function(value) {
        this.$store.dispatch("weather/setShow", value);
      }
    },
    /** Getter / Setter for Daily Focus Component Visibility */
    showFocus: {
      get: function() {
        return this.$store.state.focus.show;
      },
      set: function(value) {
        this.$store.dispatch("focus/setShow", value);
      }
    },
    /** Getter / Setter for Quote Component Visibility */
    showQuote: {
      get: function() {
        return this.$store.state.quote.showQOTD;
      },
      set: function(value) {
        this.$store.dispatch("quote/setShow", value);
      }
    },
    /** Getter / Setter for TodoList Component Visibility */
    showTodo: {
      get: function() {
        return this.$store.state.todo.show;
      },
      set: function(value) {
        this.$store.dispatch("todo/setShow", value);
      }
    }
  }
};
</script>

<style>
</style>
