<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
