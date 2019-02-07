<template>
  <div class="control dropdown is-hoverable ">
    <div class="dropdown-trigger">
      <button
        class="button"
        :class="menuColor"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span v-if="title">{{title}}</span>
        <span class="icon is-small">
          <i
            v-if="icon"
            :class="'fas fa-' + icon"
            aria-hidden="true"
          ></i>
        </span>
      </button>
    </div>
    <div
      class="dropdown-menu"
      id="dropdown-menu"
      :style="{ 'height': height, 'width': width, 'maxHeight': maxHeight, 'maxWidth': maxWidth}"
      role="menu"
    >
      <div class="dropdown-content">
        <slot name="dropdownContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  data() {
    return {
      // TEST: Not working as of yet...
      isActive: false
    };
  },
  props: {
    height: {
      type: String
    },
    maxHeight: {
      type: String,
      default: "50vh"
    },
    maxWidth: {
      type: String,
      default: "30vw"
    },
    menuColor: {
      type: String
    },
    icon: {
      type: String
    },
    isHoverable: {
      type: Boolean
    },
    title: {
      type: String
    },
    width: {
      type: String,
      default: "25vw"
    }
  }
};
</script>

<style lang="scss" scoped>
/* Uses Bulma.css for styling */
#dropdown-menu {
  overflow: auto;
}
</style>
