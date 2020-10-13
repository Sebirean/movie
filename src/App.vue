<template>
  <Layout>
    <Header ref="headerHeight" slot="header" />
    <div ref="body" class="content" slot="body">
      <router-view />
    </div>
  </Layout>
</template>

<script>
import Layout from "./components/Layout";
import Header from "./components/layout/Header";

export default {
  name: "App",
  components: {
    Layout,
    Header
  },
  mounted() {
    this.matchHeight();
  },
  methods: {
    matchHeight() {
      this.$nextTick(() => {
        let heightHeader = this.$refs.headerHeight.$el.clientHeight;
        this.$refs.body.style.paddingTop = heightHeader + "px";
      });
    }
  }
};
</script>

<style lang="less"></style>
