<script setup>
import breakpoints from '@/configs/breakpoints';
import { chooseCards } from '@/configs/chooseCards';

const { scrollToForm } = useScroll();
</script>

<template>
  <section class="section-choose">
    <div class="ui-container">
      <div class="title">
        <span v-html="$t('chooseSection.title')" />
      </div>
      <Swiper
        slides-per-view="auto"
        :breakpoints="{
          [breakpoints.sm]: {
            allowTouchMove: false,
          },
        }"
        class="swiper"
      >
        <SwiperSlide
          v-for="(item, key) in chooseCards"
          :key="key"
          class="slide"
        >
          <SectionChooseCard v-bind="item" :id="key" class="card" />
        </SwiperSlide>
      </Swiper>
      <UiButton
        class="btn"
        :text="$t('common.requestButton')"
        @click="scrollToForm"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-choose {
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
    overflow: hidden;
  }

  .title {
    margin-bottom: em(96);
    width: em(1020);
    margin-inline: auto;
    text-align: center;

    @include media-breakpoint-down(sm) {
      width: 100%;
      margin-bottom: em(27);
    }

    span {
      color: $color-white;
      font-size: em(96);
      font-weight: $font-weight-semi-bold;
      line-height: 115%;

      @include media-breakpoint-down(sm) {
        font-size: em(24);
        line-height: 110%;
      }
    }
  }

  .swiper {
    width: 100%;
    position: static;
    margin-bottom: em(60);

    @include media-breakpoint-down(sm) {
      overflow: visible;
      width: auto;
    }

    :deep(.swiper-wrapper) {
      flex-wrap: wrap;
      gap: em(30) em(30);
      height: auto;

      @include media-breakpoint-down(sm) {
        flex-wrap: nowrap;
        gap: 0;
      }
    }

    .slide {
      width: em(513);
      height: auto;

      @include media-breakpoint-down(sm) {
        width: em(245);
      }

      &:not(:last-child) {
        @include media-breakpoint-down(sm) {
          margin-right: em(16);

          html[dir='rtl'] & {
            margin-right: 0;
            margin-left: em(16);
          }
        }
      }

      .card {
        width: 100%;
        height: 100%;
        min-height: em(418);

        @include media-breakpoint-down(sm) {
          min-height: em(278);
        }
      }
    }
  }

  .btn {
    display: flex;
    width: em(272);
    height: em(48);
    margin-inline: auto;

    @include media-breakpoint-down(sm) {
      width: 100%;
      height: em(48);
    }
  }
}
</style>
