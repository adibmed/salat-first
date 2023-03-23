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
      return "font-bold";
    },
  },

  mounted() {
    this.isExactActive = this.$refs.item.to === this.$route.path;
  },

  methods: {
    menuClick(event) {
      this.$emit("onMenuClick", event, this.item);
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
      class="flex items-center cursor-pointer bg-gray-700 bg-opacity-0 hover:bg-opacity-10 m-1 rounded"
      custom
      @click="menuClick"
    >
      <div @click="menuClick" class="flex items-center text-white">
        <icon
          v-if="item.icon"
          :path="item.icon"
          class="flex-none"
          :class="[isExactActive ? asideMenuItemActiveStyle : '']"
          w="w-12"
        />
        <div
          class="-mb-1 text-lg py-2 hover:text-gray-100"
          :class="[isExactActive ? asideMenuItemActiveStyle : '']"
        >
          {{ $t(item.label) }}
        </div>
      </div>
    </component>
  </li>
</template>
