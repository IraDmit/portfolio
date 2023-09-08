<template>
  <div id="app">
    <the-header />
    <the-main-screen />
    <the-about />
    <the-projects />
    <the-contact />
    <the-footer />
  </div>
</template>

<script>
import TheAbout from "./components/the-about.vue";
import TheContact from "./components/the-contact.vue";
import TheMainScreen from "./components/the-main-screen.vue";
import TheProjects from "./components/the-projects.vue";
import TheFooter from "./navigation/the-footer.vue";
import theHeader from "./navigation/the-header.vue";
export default {
  components: {
    theHeader,
    TheMainScreen,
    TheAbout,
    TheProjects,
    TheContact,
    TheFooter,
  },
};
</script>

<style lang="scss">
</style>
