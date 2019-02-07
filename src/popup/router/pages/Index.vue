<template>
  <h1>Hello Popup</h1>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    chrome.runtime.sendMessage({});
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
