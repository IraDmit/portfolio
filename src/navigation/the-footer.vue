<template>
  <footer class="container">
    <div class="footer-wrp">
      <div class="time">{{ $t("now") + " " + time }}</div>
      <ul class="contacts">
        <li class="contact"><a href="https://github.com/IraDmit">GitHub</a></li>
        <li class="contact"><a href="https://t.me/nfllex">Telegram</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      time: null,
    };
  },
  methods: {
    editMinutes(minutes) {
      return minutes < 10 ? "0" + minutes : minutes;
    },
  },
  created() {
    let date = new Date();
    let hours, minutes;
    hours = date.getHours();
    minutes = this.editMinutes(date.getMinutes());
    this.time = hours + ":" + minutes;
    setInterval(() => {
      hours = date.getHours();
      minutes = this.editMinutes(date.getMinutes());
      this.time = hours + ":" + minutes;
    }, 60000);
  },
};
</script>

<style lang="scss" scoped>
.footer-wrp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contacts {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
}
</style>
