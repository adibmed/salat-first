<script>
  import Icon from './Icon.vue';
  import { ref, defineComponent, reactive, computed } from 'vue';

  export default defineComponent({
    components: {
      Icon,
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },

    setup(props, { emit }) {
      const isExactActive = ref(false);
      const componentIs = computed(() => {
        return props.item.to ? 'router-link' : 'a';
      });

      const itemTo = computed(() => {
        return props.item.to || null;
      });

      const itemHref = computed(() => {
        return props.item.href || null;
      });

      const itemTarget = computed(() => {
        return componentIs.value === 'a' && props.item.target ? props.item.target : 'a';
      });

      const asideMenuItemActiveStyle = computed(() => {
        return 'font-bold';
      });

      const menuClick = (event) => {
        emit('onMenuClick', event, props.item);
      };

      return {
        isExactActive,
        componentIs,
        itemTo,
        itemHref,
        itemTarget,
        asideMenuItemActiveStyle,
        menuClick,
      };
    },
  });
</script>

<template>
  <li>
    <template v-if="componentIs === 'router-link'">
      <router-link
        :to="itemTo"
        :href="itemHref"
        :target="itemTarget"
        class="flex items-center cursor-pointer bg-gray-700 bg-opacity-0 hover:bg-opacity-10 m-1 rounded"
        @click="menuClick"
      >
        <div class="flex items-center text-white">
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
      </router-link>
    </template>
    <template v-else>
      <a
        ref="item"
        :to="itemTo"
        :href="itemHref"
        :target="itemTarget"
        class="flex items-center cursor-pointer bg-gray-700 bg-opacity-0 hover:bg-opacity-10 m-1 rounded"
        custom
        @click="menuClick"
      >
        <div class="flex items-center text-white">
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
      </a>
    </template>
  </li>
</template>
