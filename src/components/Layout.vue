<template>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style scoped></style>
