<template>
  <div class="populat-item">
    {{ popular.text }}
  </div>
</template>

<script>
export default {
  name: "PopularItem",
  props: {
    popular: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less">
.populat-item {
  background: red;
}
</style>
