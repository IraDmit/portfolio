<template>
  <header class="container">
    <div class="header-wrp">
      <div class="logo">Irina Dmitrieva</div>
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
    }
    .header-menu {
      margin-left: auto;
      background-color: #0c0c0c;
      display: flex;
      gap: 20px;
      backdrop-filter: blur(4px);
    }
  }
}
</style>
