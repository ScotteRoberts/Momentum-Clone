<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // DEV: Starts the update timer for the display clock.
    this.$store.dispatch("time/setNow");
  }
};
</script>

<style lang="scss">
/* Uses Bulma.css for styling */
/*  
HACK: This was the only way I could find to import Bulma Extensions!!! 
Look later if you want to import more than just the divider
*/
@import "~bulma-extensions/dist/css/bulma-extensions.min.css";

/* 
  Sets the element to the bottom of the parent 
*/
.is-pulled-down {
  margin-top: auto;
}
</style>
