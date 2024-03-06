<template>
  <header class="container">
    <div class="header-wrp">
      <a href="#" class="logo">Ira Dmitrieva</a>
      <ul class="header-menu">
        <li class="links">
          <a href="#about" @click.prevent="scrollToEl('#about')">{{
            $t("about")
          }}</a>
        </li>
        <li class="links">
          <a href="#projects" @click.prevent="scrollToEl('#projects')">{{
            $t("projects")
          }}</a>
        </li>
        <li class="links">
          <a href="#contact" @click.prevent="scrollToEl('#contact')">{{
            $t("contacts")
          }}</a>
        </li>
        <li class="links locales">
          <span
            class="locale"
            :class="{ active: $i18n.locale == locale }"
            v-for="locale in $i18n.availableLocales"
            :key="locale"
            @click="changeLanguage(locale)"
            >{{ locale.toLocaleUpperCase() }}</span
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Lenis from "@studio-freight/lenis";
export default {
  data() {
    return {
      lenis: new Lenis(),
    };
  },
  methods: {
    scrollToEl(id) {
      const elem = document.querySelector(id);

      window.scrollTo({
        top: window.scrollY + elem.getBoundingClientRect().y,
        behavior: "smooth",
      });
    },
    changeLanguage(locale) {
      if (this.$i18n.locale == locale) return;
      this.$i18n.locale = locale;

      // this.$router.push({ params: { lang: locale } });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  color: #e6e6e6;
  font-family: "Fira Mono";
  font-weight: 400;
  width: 100%;
  z-index: 10;
  mix-blend-mode: difference;
  .header-wrp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .logo {
      font-weight: 700;
      font-style: italic;
      color: #d72323;
      font-size: 26px;
      // background-color: #0c0c0c;

      @media (max-width: 600px) {
        font-size: 22px;
      }
    }
    .header-menu {
      margin-left: auto;
      // background-color: #0c0c0c;
      display: flex;
      align-items: center;
      gap: 20px;

      .links {
        cursor: pointer;
        &.locales {
          display: flex;
          .locale.active {
            color: #d72323;
          }
          .locale:first-of-type {
            &::after {
              margin: 0 7px;
              content: "||";
              color: #fff;
              @media (max-width: 650px) {
                display: none;
              }
            }
          }
          @media (max-width: 650px) {
            flex-direction: column;
          }
        }
      }
    }
    @media (max-width: 525px) {
      .logo {
        font-size: 16px;
      }
      .header-menu {
        font-size: 14px;
      }
    }
    @media (max-width: 425px) {
      .logo {
        font-size: 14px;
      }
      .header-menu {
        font-size: 14px;
      }
    }
    @media (max-width: 365px) {
      ul {
        padding: 0;
      }
      .logo {
        font-size: 14px;
        margin-right: 10px;
      }
      .header-menu {
        gap: 13px;
        font-size: 13.5px;
      }
    }
  }
}
</style>
