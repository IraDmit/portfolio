<template>
  <div class="main-screen container">
    <div class="marquee-wrp">
      <div class="introdusing" ref="marqueeWrp">
        <!-- &nbsp; -->
        <p class="marquee">Front-End Developer </p>
        <p class="marquee1">Front-End Developer</p>
      </div>
    </div>

    <div class="bottom">
      <div class="txt">Available for <br />freelance projects</div>
      <div class="txt">Live in <br />Togliatti, Russia</div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const wrp = this.$refs.marqueeWrp;
    const textWidth = document.querySelector(".marquee").clientWidth;
    gsap.set(wrp, { x: 0 });
    gsap.to(wrp, {
      x: -textWidth,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  },
};
</script>

<style lang="scss" scoped>
.main-screen {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  width: 100%;
  .marquee-wrp {
    top: 25%;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
    .introdusing {
      width: 100%;
      width: 100%;
      display: flex;
      .marquee,
      .marquee1 {
        font-size: 163px;
        // position: absolute;
        left: 100%;
        line-height: 1.3;
        font-family: "Space mono";
        padding: 24px 0;
        color: #d72323;
        white-space: nowrap;
      }
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    .txt:last-of-type {
      text-align: right;
    }
    @media (max-width: 430px) {
      .txt {
        font-size: 14px;
      }
    }
  }
}
</style>
