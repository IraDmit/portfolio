<template>
  <header class="container">
    <div class="header-wrp">
      <a href="#" class="logo">Ira Dmitrieva</a>
      <ul class="header-menu">
        <li class="links">
          <a href="#about">About</a>
        </li>
        <li class="links">
          <a href="#projects">Projects</a>
        </li>
        <li class="links">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  color: #e6e6e6;
  font-family: "Space mono";
  font-weight: 400;
  width: 100%;
  z-index: 10;
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
      background-color: #0c0c0c;
      backdrop-filter: blur(4px);
      @media (max-width: 600px) {
        font-size: 22px;
      }
    }
    .header-menu {
      margin-left: auto;
      background-color: #0c0c0c;
      display: flex;
      gap: 20px;
      backdrop-filter: blur(4px);
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
      ul{
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
