<script setup>
import breakpoints from '@/configs/breakpoints';
import { specs } from '@/configs/spec';

function onBreakpointChange(swiper) {
  swiper.setProgress(0, 0);
}
</script>

<template>
  <section class="section-spec">
    <div class="exp">
      <span class="font-number">
        {{ specs[0].number }}
      </span>
      <span class="font-text" v-html="$t(specs[0].text)" />
    </div>
    <div class="ui-container">
      <div class="heading">
        <span class="heading-text" v-html="$t('specSection.title')" />
        <span class="square-dot dot" />
      </div>
      <div class="content">
        <div class="content-left">
          <div class="card card--1">
            <div>
              <div class="font-text" v-html="$t(specs[1].text1[0])" />
              <div class="font-number" v-html="specs[1].number[0]" />
              <div class="font-text" v-html="$t(specs[1].text1[1])" />
            </div>
            <div>
              <div class="font-text" v-html="$t(specs[1].text2)" />
              <div class="font-number" v-html="specs[1].number[1]" />
            </div>
          </div>
          <div class="card card--2">
            <div class="font-number" v-html="specs[2].number" />
            <div class="font-text" v-html="$t(specs[2].text)" />
          </div>
        </div>
        <div class="content-right">
          <div class="card card--3 items-right">
            <div>
              <span class="font-number span-img">
                {{ specs[3].number }}
                <CPicture
                  src="/images/spec/star.svg"
                  alt=""
                  loading="eager"
                  class="star"
                />
              </span>
              <div class="font-text" v-html="$t(specs[3].text)" />
            </div>
          </div>
          <div class="card card--4">
            <div>
              <div class="font-number" v-html="specs[4].number[0]" />
              <div class="font-text" v-html="$t(specs[4].text[0])" />
            </div>
            <div class="items-right">
              <div class="font-number" v-html="specs[4].number[1]" />
              <div class="font-text" v-html="$t(specs[4].text[1])" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-spec {
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
  }

  .font-number {
    font-size: em(96);
    font-weight: $font-weight-semi-bold;
    line-height: 90%;

    @include media-breakpoint-down(sm) {
      font-size: em(36);
    }
  }

  .font-text {
    font-size: em(24);
    font-weight: $font-weight-light;
    line-height: 180%;

    @include media-breakpoint-down(sm) {
      font-size: em(14);
      line-height: 123%;
    }

    &:deep(strong) {
      font-weight: $font-weight-semi-bold;
    }
  }

  .exp {
    color: $color-white;
    position: absolute;
    top: em(100);
    left: em(725);
    width: em(554);
    height: em(576);
    background: $color-black-200;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: em(68) em(55);

    html[dir='rtl'] & {
      left: auto;
      right: em(725);

      @include media-breakpoint-down(sm) {
        left: auto;
        right: em(64);
      }
    }

    @include media-breakpoint-down(sm) {
      left: em(64);
      top: em(28);
      width: em(295);
      height: em(177);
      padding: em(23) em(23);
      z-index: 2;
    }
  }

  .ui-container {
    @include media-breakpoint-down(sm) {
      padding: 0;
    }

    .heading {
      color: $color-white;
      max-width: em(1170);
      margin-bottom: em(52);

      @include media-breakpoint-down(sm) {
        position: relative;
        margin-left: em(16);
        max-width: 100%;
        margin-bottom: em(114);
        z-index: 2;

        html[dir='rtl'] & {
          margin-left: auto;
          margin-right: em(20);
        }
      }

      .heading-text {
        font-size: em(96);
        font-weight: $font-weight-semi-bold;
        line-height: 1; /* 67.2px */

        @include media-breakpoint-down(sm) {
          font-size: em(24);
          line-height: 110%;
        }
      }

      .dot {
        width: em(46);
        height: em(46);
        margin-left: em(12);

        @include media-breakpoint-down(sm) {
          width: em(16);
          height: em(16);
          margin-left: em(6);
        }

        html[lang='ar'] & {
          margin-left: 0;
          margin-right: em(12);
        }

        @include media-breakpoint-down(sm) {
          margin-right: em(6);
        }
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: em(97);

      @include media-breakpoint-down(sm) {
        gap: 0;
      }

      .content-left {
        flex-grow: 1;
        padding-top: em(29);
      }

      .content-right {
        width: em(720);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include media-breakpoint-down(sm) {
          width: em(188);
          gap: em(20);
          justify-content: flex-start;
        }
      }

      .card {
        padding: em(48) em(56);
        color: $color-black-1000;

        @include media-breakpoint-down(sm) {
          padding: em(20) em(22);
        }

        .span-img {
          display: flex;
          align-items: flex-start;
          gap: 0;

          .star {
            width: em(4);
            height: auto;

            @include media-breakpoint-down(sm) {
              width: em(8);
              padding-left: em(1);
              padding-top: em(1);
            }
          }
        }

        &--1 {
          width: em(536);
          height: em(422);
          background: linear-gradient(322deg, #ff9494 13.96%, #c5cbd5 73.89%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: $color-black-1000 !important;

          @include media-breakpoint-down(sm) {
            width: em(187);
            height: em(213);
            justify-content: flex-start;
            gap: em(38);
          }
        }

        &--2 {
          color: $color-white;
          border: em(1) solid $color-white;
          width: em(437);
          height: em(302);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-left: auto;
          margin-top: em(-36);

          html[dir='rtl'] & {
            margin-left: 0;
            margin-right: auto;

            @include media-breakpoint-down(sm) {
              margin-left: auto;
              margin-right: em(-9);
            }
          }

          @include media-breakpoint-down(sm) {
            width: em(184);
            height: em(140);
            margin-left: em(-9);
            margin-top: em(-24);
          }
        }

        html[lang='es'] &--2 {
          @include media-breakpoint-down(sm) {
            margin-top: em(-16);
          }
        }

        &--3 {
          color: $color-white;
          @include media-breakpoint-down(sm) {
            padding-left: em(22);
            order: 2;
          }
        }

        &--4 {
          color: $color-white;
          width: 100%;
          height: em(470);
          background: $color-red-700;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @include media-breakpoint-down(sm) {
            height: em(242);
            order: 1;
            gap: em(32);
            justify-content: flex-end;
          }
        }
      }
    }
  }

  .items-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @include media-breakpoint-down(sm) {
      align-items: flex-start;
    }
  }

  .font {
    display: block;

    &--heading {
    }

    &--number {
    }

    &--text {
    }

    html[lang='es'] &--text {
      line-height: 100%;
    }
  }
}
</style>
