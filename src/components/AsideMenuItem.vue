<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
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
      return "bg-red-500";
    },

    asideMenuItemInactiveStyle() {
      return "bg-green-500";
    },
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
      v-slot="vSlot"
      :to="itemTo"
      :href="itemHref"
      :target="itemTarget"
      class="flex cursor-pointer dark:hover:bg-gray-700/50"
      :class="[asideMenuItemStyle, isSubmenuList ? 'p-3 text-sm' : 'py-2']"
      @click="menuClick"
    >
      <icon
        v-if="item.icon"
        :path="item.icon"
        class="flex-none"
        :class="[
          vSlot && vSlot.isExactActive
            ? asideMenuItemActiveStyle
            : asideMenuItemInactiveStyle,
        ]"
        w="w-12"
      />
      <span
        class="grow"
        :class="[
          vSlot && vSlot.isExactActive
            ? asideMenuItemActiveStyle
            : asideMenuItemInactiveStyle,
        ]"
        >{{ item.label }}</span
      >
    </component>
  </li>
</template>
