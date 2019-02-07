<template>
  <!-- DEV: Full Page Background -->

  <div
    class="hero is-fullheight has-bg-img"
    :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + imageUrl + ')' }"
  >
    <!-- Hero head: will stick at the top -->
    <header class="hero-head">
      <default-header />
    </header>

    <!-- Hero body: will be the center content -->

    <body class="hero-body">
      <default-greeting />
    </body>

    <!-- Hero footer: will stick at the bottom -->
    <footer class="hero-foot">
      <default-footer />
    </footer>
  </div>

</template>

<script>
import { mapState } from "vuex";
import DefaultHeader from "@/standalone/layouts/default/Header";
import DefaultGreeting from "@/standalone/layouts/default/Greeting";
import DefaultFooter from "@/standalone/layouts/default/Footer";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("photo", {
      imageUrl: state => state.currentPhoto.urls.full
    })
  },
  components: {
    DefaultHeader,
    DefaultGreeting,
    DefaultFooter
  },
  methods: {},
  mounted() {
    chrome.runtime.sendMessage({});
  }
};
</script>


<style lang="scss">
/* Uses Bulma.css for styling */
$defaultImageUrl: "https://unsplash.com/photos/hL00JvJZHYA";

.has-bg-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url($defaultImageUrl);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
