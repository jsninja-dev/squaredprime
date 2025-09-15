<script setup>
import { heroTips } from '@/configs/heroTips';
</script>

<template>
  <section class="section-hero">
    <div class="ui-container">
      <div class="content">
        <div class="title">
          <span class="title-text" v-html="$t('heroSection.title')" />
          <span class="square-dot dot" />
        </div>
        <div class="subtitle">
          <span>
            {{ $t('heroSection.subtitle') }}
          </span>
        </div>
        <div class="text">
          <span>
            {{ $t('heroSection.text') }}
          </span>
        </div>
      </div>
      <div class="tips">
        <div v-for="(tip, index) in heroTips" :key="index" class="tip">
          <CPicture :src="tip.icon" :alt="tip.text" :class="`icon--${index}`" />
          <span>{{ $t(tip.text) }}</span>
        </div>
      </div>
    </div>
    <CPicture
      src="/images/hero/main.jpg"
      :sources="{
        sm: '/images/hero/main-sm.jpg',
      }"
      loading="eager"
      fetch-priority="high"
      class="background"
    />
  </section>
</template>

<style scoped lang="scss">
.section-hero {
  position: relative;
  height: em(1080);
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
    height: auto;
  }

  .ui-container {
    display: flex;
    flex-direction: column;
    gap: em(28);
    padding-top: em(380);
    text-align: center;

    @include media-breakpoint-down(sm) {
      padding-top: em(170);
      padding-bottom: em(120);
    }

    .content {
      .title {
        margin-bottom: em(52);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(18);
          text-align: center;
        }

        .title-text {
          background: linear-gradient(180deg, #fff 8.84%, #ca9763 158.73%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: em(90);
          font-weight: $font-weight-semi-bold;
          line-height: 100%; /* 90px */

          @include media-breakpoint-down(sm) {
            font-size: em(32);
            line-height: 110%;
          }
        }

        .dot {
          width: em(50);
          height: em(50);
          margin-inline: em(10);

          @include media-breakpoint-down(sm) {
            width: em(16);
            height: em(16);
            margin-inline: em(6);
          }
        }
      }

      .subtitle {
        margin-bottom: em(25);

        span {
          color: $color-white;
          font-size: em(48);
          font-weight: $font-weight-medium;
          line-height: 109.626%;

          @include media-breakpoint-down(sm) {
            font-size: em(24);
          }
        }
      }

      .text {
        margin-bottom: em(54);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(28);
        }

        span {
          color: $color-white;
          font-size: em(26);
          font-weight: $font-weight-regular;
          line-height: 109.626%;

          @include media-breakpoint-down(sm) {
            font-size: em(16);
            line-height: 110%;
          }
        }
      }

      .button {
        width: em(235);
        height: em(48);
        margin-bottom: em(4);

        @include media-breakpoint-down(sm) {
          width: 100%;
          height: em(42);
        }
      }
    }

    .tips {
      display: flex;
      flex-direction: row;
      gap: em(142);
      align-items: center;
      justify-content: center;

      @include media-breakpoint-down(sm) {
        gap: em(84);
      }

      .tip {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0;

        @include media-breakpoint-down(sm) {
          max-width: em(120);
          gap: em(10);
        }

        .icon {
          &--0 {
            width: em(196);
            height: em(120);
            margin-bottom: em(30);

            @include media-breakpoint-down(sm) {
              width: em(114);
              height: em(70);
              margin-bottom: 0;
            }
          }

          &--1 {
            width: em(155);
            height: em(120);
            margin-bottom: em(30);

            @include media-breakpoint-down(sm) {
              width: em(90);
              height: em(70);
              margin-bottom: 0;
            }
          }
        }

        span {
          color: $color-white;
          text-align: center;
          font-size: em(24);
          font-weight: $font-weight-medium;
          line-height: 109.626%;

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }
      }

      .tip:last-child {
        &::before {
          content: '';
          position: absolute;
          display: block;
          top: 0;
          left: em(-72);
          width: em(2);
          height: 100%;
          background-color: $color-white;

          @include media-breakpoint-down(sm) {
            left: em(-48);
            width: em(1.5);
            height: 100%;
          }

          html[dir='rtl'] & {
            left: auto;
            right: em(-72);

            @include media-breakpoint-down(sm) {
              right: em(-42);
            }
          }
        }
      }
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
