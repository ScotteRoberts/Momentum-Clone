<template>
  <nav class="panel">
    <p class="panel-heading has-text-centered">
      Photos
    </p>

    <div class="panel-block">
      <button
        @click="getRandomPhoto"
        class="button"
      >Get Photo</button>
    </div>

  </nav>
</template>

<script>
/**
 * Background photo settings
 */
export default {
  methods: {
    /**
     * Updates the background photo with random photo through call to vuex.
     */
    getRandomPhoto: function() {
      this.$store.dispatch("photo/setUnsplashRandomPhoto");
    }
  }
};
</script>

<style>
</style>
