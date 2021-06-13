<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.tab-control {
  font-size: 15px;
  display: flex;
  text-align: center;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  height: 30px;
}
.tab-control-item {
  border: 1px solid white;
  border-radius: 20px;
  flex: 1;
  background-color: rgb(255, 129, 152);
  box-shadow: 2px 2px 5px #888888;
  padding: 7px;
}

/* .active {
  color: var(--color-high-text);
} */

.active span {
  border-bottom: 3px solid white;
}
</style>