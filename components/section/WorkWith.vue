<script setup>
import { workWith } from '@/configs/workWith';

const { scrollToForm } = useScroll();
</script>

<template>
  <section class="section-work-with">
    <div class="with-content">
      <img
        src="/images/workWith/gradient.png"
        alt="gradient"
        class="gradient"
      />
      <div class="content">
        <div class="title">
          <span class="title-text" v-html="$t('workWithSection.title')" />
          <span class="square-dot" />
        </div>
        <div class="types">
          <div
            class="type-wrapper"
            v-for="(type, index) in workWith.types"
            :key="type.text"
          >
            <div class="type">
              <img :src="type.icon" :alt="type.text" class="icon" />
              <span class="type-text" v-html="$t(type.text)" />
            </div>
            <div v-if="index !== workWith.types.length - 1" class="divider" />
          </div>
        </div>
        <UiButton
          class="btn"
          :text="$t('common.requestButton')"
          @click="scrollToForm"
        />
      </div>
    </div>
    <div class="key-content">
      <img src="/images/workWith/back.jpg" alt="back" class="back" />
      <div class="title">
        <span class="title-text" v-html="$t('workWithSection.keys.title')" />
      </div>
      <div class="keys">
        <div
          class="key"
          v-for="(key, index) in workWith.keys"
          :key="index"
          :class="{ 'key--active': key.active }"
        >
          <span v-html="$t(key.text)" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-work-with {
  margin-bottom: em(160);
  display: flex;
  gap: 0;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
    margin-bottom: em(8);
  }

  .with-content {
    overflow: hidden;
    position: relative;
    width: em(973);
    height: em(1009);
    flex-shrink: 0;
    background: linear-gradient(156deg, #040714 57.22%, #608ceb 100.27%);

    @include media-breakpoint-down(sm) {
      width: 100%;
      height: auto;
      padding-inline: em(16);
    }

    html[dir='rtl'] & {
      background: linear-gradient(204deg, #040714 57.22%, #608ceb 100.27%);
    }

    .gradient {
      position: absolute;
      bottom: em(-131);
      left: 0;
      width: 100%;
      height: em(426);
      transform: scaleX(-1);

      @include media-breakpoint-down(sm) {
        height: em(165);
        bottom: 0;
      }

      html[dir='rtl'] & {
        left: auto;
        right: 0;
        transform: scaleX(1);
      }
    }

    .content {
      position: relative;
      z-index: 1;
      width: em(815);
      margin-left: auto;
      margin-top: em(64);

      @include media-breakpoint-down(sm) {
        width: 100%;
        margin-left: 0;
        margin-top: em(27);
      }

      html[dir='rtl'] & {
        margin-left: 0;
        margin-right: auto;

        @include media-breakpoint-down(sm) {
          margin-right: 0;
        }
      }

      .title {
        margin-bottom: em(64);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(27);
          text-align: center;
        }

        .title-text {
          color: $color-white;
          font-size: em(96);
          font-weight: $font-weight-semi-bold;
          line-height: 100%; /* 96px */

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

      .types {
        width: em(540);
        margin-bottom: em(60);

        @include media-breakpoint-down(sm) {
          width: 100%;
          margin-bottom: em(35);
        }

        .type {
          display: flex;
          gap: em(30);
          align-items: center;

          @include media-breakpoint-down(sm) {
            gap: em(15);
          }

          .icon {
            width: em(48);
            height: em(48);

            @include media-breakpoint-down(sm) {
              width: em(24);
              height: em(24);
            }
          }

          .type-text {
            color: $color-white;
            font-size: em(24);
            font-weight: $font-weight-medium;
            line-height: 100%;

            @include media-breakpoint-down(sm) {
              font-size: em(18);
            }

            &:deep(small) {
              color: $color-grey-200;
              font-size: em(11);
              font-weight: $font-weight-regular;
              line-height: 100%;
            }
          }
        }

        .divider {
          margin-block: em(30);
          width: 100%;
          height: em(2);
          background: linear-gradient(90deg, #c30044 0%, #c5cbd5 100%);

          @include media-breakpoint-down(sm) {
            margin-block: em(16);
          }
        }
      }

      .btn {
        display: flex;
        width: em(272);
        height: em(48);

        @include media-breakpoint-down(sm) {
          width: 100%;
          height: em(48);
          margin-bottom: em(30);
        }
      }
    }
  }

  .key-content {
    position: relative;
    margin-top: em(70);
    width: em(947);
    height: em(1011);
    padding: em(72) em(60);

    @include media-breakpoint-down(sm) {
      margin-top: 0;
      width: 100%;
      height: auto;
      padding: em(30) em(16);
    }

    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;

      html[dir='rtl'] & {
        left: auto;
        right: 0;
        transform: scaleX(-1);
      }
    }

    .title {
      margin-bottom: em(270);

      @include media-breakpoint-down(sm) {
        margin-bottom: em(32);
      }

      .title-text {
        color: $color-white;
        font-size: em(48);
        font-weight: $font-weight-semi-bold;
        line-height: 100%;

        @include media-breakpoint-down(sm) {
          font-size: em(20);
        }
      }
    }

    .keys {
      display: flex;
      flex-wrap: wrap;
      gap: em(20) em(20);

      @include media-breakpoint-down(sm) {
        gap: em(14) em(14);
      }

      .key {
        display: inline-block;
        padding: em(16) em(20);
        border-radius: em(553);
        border: em(1) solid $color-white;
        background: rgba(4, 7, 20, 0.2);
        backdrop-filter: blur(em(2.5));

        @include media-breakpoint-down(sm) {
          padding: em(10) em(8);
        }

        span {
          color: $color-white;
          font-size: em(18);
          font-weight: $font-weight-regular;

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }

        &--active {
          background: #fff;

          span {
            color: $color-black;
          }
        }
      }
    }
  }
}
</style>
