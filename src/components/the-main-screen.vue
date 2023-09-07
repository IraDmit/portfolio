<template>
  <div class="main-screen container">
    <div class="marquee-wrp">
      <div class="introdusing">
        <p class="marquee">Front-End Developer &nbsp;</p>
        <p class="marquee">Front-End Developer &nbsp;</p>
        <p class="marquee">Front-End Developer &nbsp;</p>
        <p class="marquee">Front-End Developer &nbsp;</p>
        <p class="marquee">Front-End Developer &nbsp;</p>
        <p class="marquee">Front-End Developer &nbsp;</p>
      </div>
    </div>

    <div class="bottom">
      <div class="txt">Available for <br />freelance projects</div>
      <div class="txt">Live in <br />Togliatti, Russia</div>
    </div>
  </div>
</template>

<script>
export default {};
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
    position: absolute;
    width: 100%;
    .introdusing {
      width: 100%;
      overflow: hidden;

      width: 100%;
      display: flex;
      .marquee {
        // width: 100%;
        font-size: 100px;
        line-height: 1.3;
        font-family: "Space mono";
        padding: 24px 0;
        color: #d72323;
        white-space: nowrap;
        animation: marquee 7s infinite linear;
      }
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}

@keyframes marquee {
  from {
    transform: translate3d(5%, 0, 0);
  }
  to {
    transform: translate3d(-25%, 0, 0);
  }
}
</style>
