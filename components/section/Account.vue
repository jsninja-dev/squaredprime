<script setup></script>

<template>
  <section class="section-account">
    <img
      src="/images/account/gradient.png"
      alt="gradient"
      class="gradient-left hidden-mobile"
    />
    <img
      src="/images/account/gradient.png"
      alt="gradient"
      class="gradient-right hidden-mobile"
    />
    <UiForm class="form" id="form" />
  </section>
</template>

<style scoped lang="scss">
.section-account {
  position: relative;
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
  }

  .gradient-left {
    position: absolute;
    top: em(80);
    left: em(130);
    width: em(496);
    height: em(435);
  }

  .gradient-right {
    position: absolute;
    top: em(336);
    right: em(112);
    width: em(496);
    height: em(435);
  }

  .form {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-margin-top: em(240);
    
    @include media-breakpoint-down(sm) {
      margin-inline: em(16);
      scroll-margin-top: em(80);
    }
  }
}
</style>
