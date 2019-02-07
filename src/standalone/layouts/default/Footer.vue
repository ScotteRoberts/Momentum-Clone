<template>
  <div class="columns is-paddingless is-marginless no-gap">
    <div class="column is-pulled-down">
      <div class="field is-grouped">
        <div class="control">
          <!-- DEV: Settings Menu -->
          <dropdown-menu
            class="is-up is-left"
            icon="cog"
            menu-color="is-info"
            width="40vw"
            max-width="40vw"
            height="60vh"
            max-height="60vh"
          >
            <settings-menu slot="dropdownContent" />
          </dropdown-menu>
        </div>
        <referral-button />
      </div>
    </div>
    <div class="column has-text-centered">
      <quote-of-the-day v-if="showQuote" />
    </div>
    <div class="column is-pulled-down">
      <!-- DEV: Todo Menu -->
      <dropdown-menu
        v-if="showTodos"
        class="is-up is-right is-pulled-right"
        icon="angle-up"
        max-height="80vh"
        menu-color="is-primary"
        title="Todos"
      >
        <todo-list slot="dropdownContent" />
      </dropdown-menu>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from "vuex";
import ReferralButton from "@/standalone/elements/ReferralButton";
import QuoteOfTheDay from "@/standalone/components/QuoteOfTheDay";
import SettingsMenu from "@/standalone/components/settings/Template";
import TodoList from "@/standalone/components/TodoList";
import DropdownMenu from "@/standalone/components/DropdownMenu";

export default {
  name: "AppFooter",
  data() {
    return {};
  },
  computed: {
    ...mapState("todo", {
      showTodos: state => state.show
    }),
    ...mapState("quote", {
      showQuote: state => state.showQOTD
    })
  },
  components: {
    ReferralButton,
    QuoteOfTheDay,
    SettingsMenu,
    TodoList,
    DropdownMenu
  },
  methods: {},
  mounted() {
    chrome.runtime.sendMessage({});
  }
};
</script>


<style lang="scss" scoped>
</style>
