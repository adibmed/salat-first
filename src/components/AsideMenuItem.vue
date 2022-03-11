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
      <div class="flex items-center">
        <icon
          v-if="item.icon"
          :path="item.icon"
          class="flex-none"
          :class="[isExactActive ? asideMenuItemActiveStyle : '']"
          w="w-12"
        />
        <div
          class="-mb-1"
          :class="[isExactActive ? asideMenuItemActiveStyle : '']"
        >
          {{ item.label }}
        </div>
      </div>
    </component>
  </li>
</template>
