<script setup>
const { scrollToForm } = useScroll();
</script>

<template>
  <section class="section-qualities">
    <div class="ui-container">
      <div class="gradient" />
      <div class="content">
        <div class="title-wrapper">
          <span class="title" v-html="$t('qualitiesSection.title')" />
          <span class="square-dot" />
        </div>
        <div class="description">
          <span>
            {{ $t('qualitiesSection.description') }}
          </span>
        </div>
        <UiButton
          class="btn"
          :text="$t('common.requestButton')"
          @click="scrollToForm"
        />
        <CPicture src="/images/qualities/back.png" class="bg-image" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-qualities {
  position: relative;
  margin-bottom: em(160);
  z-index: 1;
  height: em(747);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
    height: auto;
    overflow: hidden;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: em(811);
    height: em(857);

    @include media-breakpoint-down(sm) {
      position: relative;
      height: em(418);
      width: em(396);
      margin-left: em(-20);
      margin-top: em(32);
    }

    html[dir='rtl'] & {
      left: auto;
      right: 0;
      transform: scaleX(-1);

      @include media-breakpoint-down(sm) {
        margin-left: 0;
        margin-right: em(-20);
      }
    }
  }

  .gradient {
    position: absolute;
    top: em(28);
    left: em(471);
    right: 0;
    height: em(747);
    background: linear-gradient(108deg, #608ceb 15.55%, #040714 94.98%);
    z-index: -1;

    @include media-breakpoint-down(sm) {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(159deg, #040714 25.76%, #608ceb 94.57%);
    }

    html[dir='rtl'] & {
      left: 0;
      right: em(471);
      transform: scaleX(-1);

      @include media-breakpoint-down(sm) {
        right: 0;
      }
    }
  }

  .content {
    padding-bottom: em(150);
    width: em(781);
    padding-top: em(112);
    margin-left: auto;

    @include media-breakpoint-down(sm) {
      width: 100%;
      padding-top: 0;
      margin-left: 0;
      padding-bottom: em(35);
    }

    html[dir='rtl'] & {
      margin-right: auto;
      margin-left: 0;

      @include media-breakpoint-down(sm) {
        margin-right: 0;
      }
    }

    .title-wrapper {
      margin-bottom: em(40);

      @include media-breakpoint-down(sm) {
        text-align: center;
        margin-bottom: em(24);
      }

      .title {
        color: $color-white;
        font-size: em(96);
        font-weight: $font-weight-semi-bold;
        line-height: 115%;

        @include media-breakpoint-down(sm) {
          font-size: em(32);
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

    .description {
      margin-bottom: em(54);

      @include media-breakpoint-down(sm) {
        margin-bottom: em(28);
      }

      span {
        color: $color-white;
        font-size: em(24);
        font-weight: $font-weight-regular;
        letter-spacing: -0.02em;

        @include media-breakpoint-down(sm) {
          font-size: em(16);
          font-weight: $font-weight-light;
          line-height: 106%;
          text-align: justify;
          display: block;
        }
      }
    }

    .btn {
      width: em(272);
      height: em(48);

      @include media-breakpoint-down(sm) {
        width: 100%;
        height: em(48);
      }
    }
  }
}
</style>
