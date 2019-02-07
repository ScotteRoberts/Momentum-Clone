<template>
  <!-- DEV: Quote -->
  <div class="content has-text-white">
    <div>
      {{currentQuote.content}}
    </div>
    <div>
      {{currentQuote.author}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// TEST: Add filter for length of quote

export default {
  name: "QuoteOfTheDay",
  data() {
    return {};
  },
  computed: {
    ...mapState("quote", {
      currentQuote: state => state.current
    })
  },
  components: {},
  filters: {
    // TEST: No filter necessary. Mom found it more frustrating to not have a quote.
    /**
     * @param {string} value
     */
    stringLessThan100: function(value) {
      if (!value) return "";
      if (value.length > 100) {
        return value.substring(0, 100) + " ...";
      } else {
        return value;
      }
    }
  },
  methods: {
    /**
     * Quote of the Day Retrieval.
     * Dispatches data to Vuex for storage.
     */
    // TEST: Change to time based interval based on the api's quote rotation schedule.
    getQOTD: function() {
      this.$axios
        .get("https://quotes.rest/qod.json")
        .then(response => {
          let QOTD = response.data.contents.quotes[0];
          console.log("Quote of the Day", QOTD);
          this.$store.dispatch("quote/getQOTD", QOTD);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.getQOTD();
  }
};
</script>

<style>
</style>
