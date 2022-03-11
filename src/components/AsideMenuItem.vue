<script>
import Icon from "./Icon.vue";
export default {
  components: {
    Icon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isExactActive: false,
    };
  },
  computed: {
    componentIs() {
      return this.item.to ? "router-link" : "a";
    },

    itemTo() {
      return this.item.to || null;
    },

    itemHref() {
      return this.item.href || null;
    },

    itemTarget() {
      return this.componentIs === "a" && this.item.target
        ? this.item.target
        : null;
    },

    asideMenuItemActiveStyle() {
      return "font-bold text-black";
    },

    asideMenuItemInactiveStyle() {
      return "";
    },
  },

  mounted() {
    this.isExactActive = this.$refs.item.to === this.$route.path;
  },

  methods: {
    menuClick(event) {
      this.$emit("menu-click", event, this.item);
    },
  },
};
</script>

<template>
  <li>
    <component
      :is="componentIs"
      ref="item"
      :to="itemTo"
      :href="itemHref"
      :target="itemTarget"
      class="flex items-center cursor-pointer"
      custom
      @click="menuClick"
    >
      <span class="flex items-center">
        <icon
          v-if="item.icon"
          :path="item.icon"
          class="flex-none"
          :class="[
            isExactActive
              ? asideMenuItemActiveStyle
              : asideMenuItemInactiveStyle,
          ]"
          w="w-12"
        />
        <span
          class="grow"
          :class="[
            isExactActive
              ? asideMenuItemActiveStyle
              : asideMenuItemInactiveStyle,
          ]"
          >{{ item.label }}</span
        >
      </span>
    </component>
  </li>
</template>
