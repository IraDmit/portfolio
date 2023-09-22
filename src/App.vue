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
import Lenis from "@studio-freight/lenis";
export default {
  components: {
    theHeader,
    TheMainScreen,
    TheAbout,
    TheProjects,
    TheContact,
    TheFooter,
  },
  mounted() {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // lenis.on("scroll", (e) => {
    // console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    console.log(lenis);
    requestAnimationFrame(raf);
  },
};
</script>

<style lang="scss"></style>
