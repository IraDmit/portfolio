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
      margin-right: 300px;
    }
  }
  .second-row {
    display: flex;
    justify-content: end;
    .col {
      max-width: 500px;
      width: 100%;
      p {
        text-transform: uppercase;
      }
    }
  }
}
</style>
