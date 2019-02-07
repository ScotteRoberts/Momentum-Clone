<template>
  <!-- TODO: Popup "Links" menu for savable links -->
  <!-- TODO: Search bar with clickable icon for text input -->
  <div class="columns no-gap is-paddingless is-marginless">
    <div class="column">
      <div class="field is-grouped">
        <div class="control">
          <dropdown-menu
            v-if="showLinks"
            class="dropdown is-hoverable is-left is-pulled-left"
            icon="angle-down"
            menu-color="is-primary"
            title="Links"
          >
            <links-list slot="dropdownContent" />
          </dropdown-menu>
        </div>
        <search v-if="showSearch" />
      </div>
    </div>
    <!-- TODO: Weather temp with current weather icon. Popup when clicked to change location and degrees -->
    <div class="column">
      <div class="control">

        <dropdown-menu
          v-if="showWeather"
          class="dropdown is-hoverable is-right is-pulled-right"
          icon="angle-down"
          menu-color="is-info"
          title="Weather"
          max-width="30vw"
        >
          <weather slot="dropdownContent" />
        </dropdown-menu>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from "vuex";
import Search from "@/standalone/elements/Search";
import DropdownMenu from "@/standalone/components/DropdownMenu";
import LinksList from "@/standalone/components/LinksList";
import Weather from "@/standalone/components/weather/Weather";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState("link", {
      showLinks: state => state.showLinks
    }),
    ...mapState("search", {
      showSearch: state => state.show
    }),
    ...mapState("weather", {
      showWeather: state => state.show
    })
  },
  components: {
    Search,
    DropdownMenu,
    LinksList,
    Weather
  },
  methods: {},
  mounted() {
    chrome.runtime.sendMessage({});
  }
};
</script>


<style lang="scss" scoped>
/* Uses Bulma.css for styling */
</style>
