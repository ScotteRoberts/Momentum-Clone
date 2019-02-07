<template>

  <p class="control">
    <a
      class="button is-light"
      :href="artistProfile"
      target="_blank"
      rel="noopener noreferrer"
      :title="'Download free high-resolution photos from ' + artistName + ' at Unsplash.com'"
    >
      <span class="icon">
        <i class="fas fa-camera"></i>
      </span>
      <span>{{artistName}}</span>
    </a>
  </p>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ReferralButton",
  computed: {
    ...mapState("photo", {
      artistName: state => state.currentPhoto.artist.fullName,
      // DEV: Query string is for Unsplash recognition of artist
      artistProfile: state =>
        state.currentPhoto.artist.profile +
        "?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
    })
  }
};
</script>

<style>
</style>
