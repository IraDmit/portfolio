<template>
  <div class="about-wrp container" id="about">
    <div class="first-row">
      <div class="about" ref="about">
        {{ $t("helloTxt") }}
      </div>
      <p>{{ $t("about").toUpperCase() }}</p>
    </div>
    <div class="second-row">
      <div class="col" ref="experience">
        <p>{{ $t("experience").toUpperCase() }}</p>
        <div class="txt">
          {{ $t("expTxt") }}
        </div>
      </div>
      <div class="col" ref="skills">
        <p>{{ $t("skills").toUpperCase() }}</p>
        <div class="txt">
          {{ $t("skillsTxt") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    gsap.fromTo(
      this.$refs.skills,
      {
        xPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        duration: 2.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-wrp",
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      this.$refs.experience,
      {
        xPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        duration: 2.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-wrp",
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      this.$refs.about,
      {
        xPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        duration: 2.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-wrp",
          start: "top bottom",
        },
      }
    );
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.about-wrp {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  .first-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    p {
      text-transform: uppercase;
    }
    .about {
      font-size: 36px;
      max-width: 70%;
      width: 100%;

      @media (max-width: 1024px) {
        font-size: 26px;
      }
      @media (max-width: 768px) {
        font-size: 22px;
      }
      @media (max-width: 520px) {
        font-size: 18px;
      }
      @media (max-width: 440px) {
        font-size: 16px;
      }
    }
  }
  .second-row {
    display: flex;
    justify-content: end;
    .col {
      max-width: 60%;
      width: 100%;
      padding: 15px;
      p {
        text-transform: uppercase;
      }
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    @media (max-width: 460px) {
      flex-direction: column;
      gap: 20px;
      .col {
        max-width: 100%;
        width: 100%;
        padding: 0;
      }
    }
  }
}
</style>
