<template>
  <div class="main-section" id="contact">
    <div class="big-txt">Irina Dmitrieva</div>
    <div class="glitch">alisagoodpirate@gmail.com</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  .big-txt {
    font-family: "Caravan";
    font-size: 200px;
    font-weight: 700;
    transition: 0.3s;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
      color: #d72323;
    }
  }

  .glitch {
    color: #fff;
    font-size: 70px;
    position: relative;
    padding: 30px;
    &::before,
    &::after {
      content: "alisagoodpirate@gmail.com";
      color: #fff;
      position: absolute;
      top: 0;
      overflow: hidden;
      padding: 30px;
    }
    &::before {
      left: 3px;
      text-shadow: -3px 0 red;
      animation: glitch-before 7s linear 0s infinite alternate;
    }
    &::after {
      left: -3px;
      text-shadow: -3px 0 blue;
      animation: glitch-after 7s linear 0s infinite alternate;
    }
  }

  @media (max-width: 1100px) {
    .glitch {
      font-size: 55px;
    }
  }
  @media (max-width: 890px) {
    .glitch {
      font-size: 45px;
    }
    .big-txt {
      font-size: 170px;
    }
  }
  @media (max-width: 768px) {
    .glitch {
      font-size: 40px;
    }
  }
  @media (max-width: 680px) {
    .big-txt {
      font-size: 135px;
    }
    .glitch {
      font-size: 35px;
    }
  }
  @media (max-width: 576px) {
    .glitch {
      font-size: 26px;
    }
    .big-txt {
      font-size: 115px;
    }
  }
  @media (max-width: 450px) {
    .glitch {
      font-size: 22px;
    }
    .big-txt {
      font-size: 100px;
    }
  }
  @media (max-width: 390px) {
    .glitch {
      font-size: 18px;
    }
    .big-txt {
      font-size: 85px;
    }
  }
  @media (max-width: 320px) {
    .glitch {
      font-size: 16px;
    }
    .big-txt {
      font-size: 70px;
    }
  }
}
@keyframes glitch-before {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150) + px, 1100px, random(150) + px, 30px);
    }
  }
}

@keyframes glitch-after {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150) + px, 1100px, random(150) + px, 30px);
    }
  }
}
</style>
