<script setup>
const { scrollToForm } = useScroll();
</script>

<template>
  <section class="section-start">
    <div class="ui-container">
      <img src="/images/start/back.png" alt="back" class="back" />
      <div class="gradient" />
      <div class="title">
        <span class="title-text" v-html="$t('startSection.title')" />
        <span class="square-dot" />
      </div>
      <div class="text">
        <span v-html="$t('startSection.text')" />
      </div>
      <UiButton
        class="btn"
        :text="$t('common.requestButton')"
        @click="scrollToForm"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-start {
  margin-bottom: em(160);
  text-align: center;
  position: relative;

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
    overflow: hidden;
  }

  .back {
    position: absolute;
    top: em(148);
    left: 0;
    width: 100%;
    height: em(830);
    z-index: -1;

    @include media-breakpoint-down(sm) {
      top: em(75);
      left: em(-84);
      max-width: em(602);
      width: em(602);
      height: em(260);
    }
  }

  .gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: em(1080);
    height: em(800);
    background: linear-gradient(241deg, #040714 28.28%, #608ceb 82.09%);
    z-index: -2;

    @include media-breakpoint-down(sm) {
      width: em(350);
      top: em(50);
      height: auto;
    }
  }

  .title {
    margin-bottom: em(300);

    @include media-breakpoint-down(sm) {
      margin-bottom: em(102);
    }

    .title-text {
      color: $color-white;
      font-size: em(96);
      font-weight: $font-weight-semi-bold;
      line-height: 100%;

      @include media-breakpoint-down(sm) {
        font-size: em(24);
      }
    }

    .square-dot {
      width: em(50);
      height: em(50);
      margin-inline: em(10);

      @include media-breakpoint-down(sm) {
        width: em(13);
        height: em(13);
        margin-inline: em(4);
      }
    }
  }

  .text {
    margin-bottom: em(72);

    @include media-breakpoint-down(sm) {
      margin-bottom: em(27);
    }

    span {
      color: $color-white;
      font-size: em(64);
      font-weight: $font-weight-light;
      line-height: 109.375%;

      @include media-breakpoint-down(sm) {
        font-size: em(20);
      }
    }
  }

  .btn {
    margin-bottom: em(348);
    width: em(272);
    height: em(48);

    @include media-breakpoint-down(sm) {
      width: 100%;
      height: em(48);
      margin-bottom: em(80);
    }
  }
}
</style>
