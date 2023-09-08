<template>
  <div class="about-wrp container" id="about">
    <div class="first-row">
      <div class="about">
        Hello! My name is Irina Dmitrieva, I'm a front-end developer from
        Togliatti, Russia. I like to create responsive and performant and
        visually pleasing websites.
      </div>
      <p>about</p>
    </div>
    <div class="second-row">
      <div class="col">
        <p>experience</p>
        <div class="txt">My development experience is about a year</div>
      </div>
      <div class="col">
        <p>skills</p>
        <div class="txt">
          I have advanced knowledge of HTML, CSS and JavaScript. I have
          experience with Vue.js 2 and Nuxt.js 2. I understand the principles of
          responsive and adaptive design. Application development and support,
          API integration, unit testing, responsive design. Knowledge of
          development tools such as Webpack, Babel and Git.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
