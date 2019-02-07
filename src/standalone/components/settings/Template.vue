<template>
  <div class="columns is-gapless">
    <div class="column is-left is-3">
      <aside class="menu">
        <p class="menu-label">
          Settings
        </p>
        <ul class="menu-list">
          <li><a @click="activeMenu = 'general'">General</a></li>
          <li><a @click="activeMenu = 'todo'">Todo</a></li>
          <li><a @click="activeMenu = 'mantra'">Mantras</a></li>
          <li><a @click="activeMenu = 'photo'">Photos</a></li>
          <li><a @click="activeMenu = 'quote'">Quotes</a></li>
          <li><a @click="activeMenu = 'link'">Links</a></li>
          <li><a @click="activeMenu = 'balance'">Balance</a></li>
        </ul>
        <p class="menu-label">
          Documentation
        </p>
        <ul class="menu-list">
          <li><a
              href="https://scotteroberts.github.io"
              target="_blank"
            >About</a></li>
          <li><a
              href="https://github.com/ScotteRoberts/Personal-Projects/tree/master/Chrome%20Extensions/momentum-clone"
              target="_blank"
            >Github</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/scott-e-roberts"
              target="_blank"
            >LinkedIn
            </a>
          </li>
        </ul>
      </aside>
    </div>
    <div class="is-divider-vertical"></div>
    <div class="column is-right">
      <balance-settings v-show="activeMenu === 'balance'" />
      <general-settings v-show="activeMenu === 'general'" />
      <link-settings v-show="activeMenu === 'link'" />
      <mantra-settings v-show="activeMenu === 'mantra'" />
      <photo-settings v-show="activeMenu === 'photo'" />
      <quote-settings v-show="activeMenu === 'quote'" />
      <todo-settings v-show="activeMenu === 'todo'" />
    </div>
    <!-- HACK: Added extra padding to the end to make the settings panels centered -->
    <div class="column is-1"></div>
  </div>

</template>

<script>
import BalanceSettings from "@/standalone/components/settings/BalanceSettings";
import GeneralSettings from "@/standalone/components/settings/GeneralSettings";
import LinkSettings from "@/standalone/components/settings/LinkSettings";
import MantraSettings from "@/standalone/components/settings/MantraSettings";
import PhotoSettings from "@/standalone/components/settings/PhotoSettings";
import QuoteSettings from "@/standalone/components/settings/QuoteSettings";
import TodoSettings from "@/standalone/components/settings/TodoSettings";
/**
 * Setting Component Template
 */
export default {
  components: {
    BalanceSettings,
    GeneralSettings,
    LinkSettings,
    MantraSettings,
    PhotoSettings,
    QuoteSettings,
    TodoSettings
  },
  data() {
    return {
      activeMenu: "general"
    };
  }
};
</script>

<style lang="scss">
</style>
