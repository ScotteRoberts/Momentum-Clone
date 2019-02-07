<template>
  <form
    action="https://www.google.com/search"
    class="searchform"
    method="get"
    name="searchform"
  >
    <p class="control has-icons-left has-text-white">
      <input
        autocomplete="on"
        class="form-control search input is-rounded has-text-white"
        name="q"
        placeholder="Search"
        type="text"
      >
      <span class="icon is-left">
        <i class="fas fa-search"></i>
      </span>
    </p>
  </form>
</template>

<script>
/**
 * Google search engine input bar
 *
 */
// TEST: Add functionality for multiple search engines, not just Google
export default {
  name: "SearchInput"
};
</script>

<style scoped lang="scss">
input {
  border: 1px solid white;
  background-color: transparent;
}
input::placeholder {
  color: white;
  opacity: 1;
}
</style>
