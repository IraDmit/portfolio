<template>
  <div class="main-screen container">
    <div class="glitch">
      <img
        src="https://d2kq0urxkarztv.cloudfront.net/58e4b332c0367b005e8ff54d/1039748/upload-a2514e75-7916-46a6-a22f-9d17ea642d5f.png?w=788"
        alt=""
      />
      <div class="glitch__layers">
        <div class="glitch__layer"></div>
        <div class="glitch__layer"></div>
        <div class="glitch__layer"></div>
      </div>
    </div>

    <div class="marquee" ref="marquee">
      <div class="marquee-content" ref="marqueeContent">
        <p class="marque-part">Developer</p>
        <p class="marque-part">Front-End Developer</p>
        <p class="marque-part">Front-End</p>
      </div>
    </div>

    <div class="bottom">
      <div class="txt" v-html="$t('avaliable')"></div>
      <div class="txt" v-html="$t('city')"></div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    if (window.innerWidth < 600) return;
    const clone = this.$refs.marqueeContent.cloneNode(true);
    this.$refs.marquee.append(clone);
    const width = parseInt(
      getComputedStyle(this.$refs.marqueeContent).getPropertyValue("width"),
      10
    );
    const gap = parseInt(
      getComputedStyle(this.$refs.marqueeContent).getPropertyValue(
        "column-gap"
      ),
      10
    );

    const distanceTranslate = -1 * (gap + width);

    gsap.fromTo(
      this.$refs.marquee.children,
      { x: 0 },
      { x: distanceTranslate, duration: 15, repeat: -1, ease: "none" }
    );
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
  @media (max-width: 770px) {
    height: 95vh;
  }
  @media (max-width: 576px) {
    height: 70vh;
  }
  .glitch {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    z-index: -1;
  }
  .glitch img {
    position: relative;
    z-index: 1;
    display: block;
    max-width: 788px;
    width: 100%;
    @media (max-width: 1500px) {
      width: 680px;
    }
    @media (max-width: 1060px) {
      width: 600px;
    }
    @media (max-width: 770px) {
      width: 500px;
    }
    @media (max-width: 600px) {
      width: 470px;
      height: 550px;
    }
    @media (max-width: 500px) {
      width: 400px;
      height: 500px;
    }
    @media (max-width: 450px) {
      width: 350px;
      height: 470px;
    }
  }
  .glitch__layers {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .glitch__layer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(https://d2kq0urxkarztv.cloudfront.net/58e4b332c0367b005e8ff54d/1039748/upload-a2514e75-7916-46a6-a22f-9d17ea642d5f.png?w=788);
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .glitch__layer:nth-child(1) {
    transform: translateX(-5%);
    animation: glitch-anim-1 2s infinite linear alternate;
  }
  .glitch__layer:nth-child(2) {
    transform: translateX(3%) translateY(3%);
    animation: glitch-anim-2 2.3s -0.8s infinite linear alternate;
  }
  .glitch__layer:nth-child(3) {
    transform: translateX(3%);
    animation: glitch-anim-flash 1s infinite linear;
  }
  @keyframes glitch-anim-1 {
    0% {
      clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
    }
    10% {
      clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    }
    20% {
      clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    }
    30% {
      clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    }
    40% {
      clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
    }
    50% {
      clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
    }
    60% {
      clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
    }
    70% {
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    80% {
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    90% {
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    100% {
      clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
    }
  }
  @keyframes glitch-anim-2 {
    0% {
      clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
    }
    15% {
      clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    }
    25% {
      clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
    }
    30% {
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    45% {
      clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
    }
    50% {
      clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
    }
    65% {
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    75% {
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    80% {
      clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
    }
    95% {
      clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    }
    100% {
      clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
    }
  }
  @keyframes glitch-anim-flash {
    0% {
      opacity: 0.2;
    }
    30%,
    100% {
      opacity: 0;
    }
  }
  .marquee {
    transform: translateY(-50%);
    top: 50%;
    left: 0;

    position: absolute;
    display: flex;
    overflow: hidden;
    width: 100%;
    grid-gap: 1rem;
    z-index: -3;
    &-content {
      min-width: 100%;
      display: flex;
      flex: auto;
      justify-content: space-around;
      grid-gap: 1rem;
      p {
        font-size: 80px;
        left: 100%;
        line-height: 1.3;
        font-family: "Fira Mono";
        padding: 24px 0;
        color: #d72323;
        white-space: nowrap;
        margin: 0;
        @media (max-width: 1850px) {
          font-size: 70px;
        }
        @media (max-width: 1610px) {
          font-size: 60px;
        }
        @media (max-width: 1386px) {
          font-size: 50px;
        }
        @media (max-width: 1160px) {
          font-size: 40px;
        }
        @media (max-width: 934px) {
          font-size: 30px;
        }
        @media (max-width: 704px) {
          font-size: 25px;
        }
        @media (max-width: 600px) {
          font-size: 40px;
        }
        @media (max-width: 475px) {
          font-size: 30px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    text-shadow: 1px 1px 2px red;
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
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinking {
  0% {
    border-color: white;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: white;
  }
}
</style>
