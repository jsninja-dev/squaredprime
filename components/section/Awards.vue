<script setup>
import { awards } from '@/configs/awards';

const { scrollToForm } = useScroll();
</script>

<template>
  <section class="section-awards">
    <div class="ui-container">
      <div class="header">
        <div class="title">
          <span class="title-text">
            {{ $t('awardsSection.title') }}
          </span>
          <span class="square-dot" />
        </div>
        <UiButton
          class="submit-button hidden-mobile"
          :text="$t('common.requestButton')"
          @click="scrollToForm"
        />
      </div>
      <div class="caption">
        <span>
          {{ $t('awardsSection.caption') }}
        </span>
      </div>

      <div class="awards">
        <div v-for="(award, index) in awards" :key="index" class="award">
          <CPicture
            :class="`icon icon--${award.iconName}`"
            :src="`/images/awards/${award.iconName}.svg`"
            loading="lazy"
            :alt="$t(award.title)"
          />

          <div class="text-wrapper">
            <div class="award-title">
              <span>
                {{ $t(award.title) }}
              </span>
            </div>

            <div class="award-year">
              <span>
                {{ award.year }}
              </span>
            </div>

            <div class="award-text">
              <span>
                {{ $t(award.text) }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <UiButton
        class="submit-button hidden-desktop"
        :text="$t('common.requestButton')"
        @click="scrollToForm"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-awards {
  $parent: &;
  color: $color-white;
  margin-top: em(80);
  margin-bottom: em(40);

  @include media-breakpoint-down(sm) {
    margin-top: em(36);
  }

  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: em(40);
    margin-bottom: em(24);

    @include media-breakpoint-down(sm) {
      gap: em(24);
      margin-bottom: em(16);
    }

    .title {
      max-width: em(900);

      @include media-breakpoint-down(sm) {
        max-width: 100%;
      }

      .title-text {
        font-size: em(90);
        font-weight: $font-weight-bold;
        line-height: 100%; /* 90px */

        @include media-breakpoint-down(sm) {
          font-size: em(32);
        }
      }
    }

    html[lang='es'] .title {
      @include media-breakpoint-down(sm) {
        width: 100%;
      }
    }

    .square-dot {
      width: em(46);
      height: em(46);
      margin-left: em(16);

      @include media-breakpoint-down(sm) {
        width: em(16);
        height: em(16);
        margin-left: em(4);
      }

      html[lang='ar'] & {
        margin-left: 0;
        margin-right: em(16);

        @include media-breakpoint-down(sm) {
          margin-right: em(4);
        }
      }
    }
  }

  .caption {
    margin-bottom: em(48);

    @include media-breakpoint-down(sm) {
      margin-bottom: em(24);
    }

    span {
      font-size: em(24);
      font-weight: $font-weight-light;

      @include media-breakpoint-down(sm) {
        font-size: em(16);
      }
    }
  }

  .awards {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
      gap: em(40) 0;
    }

    .award {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: em(225);

      @include media-breakpoint-down(sm) {
        width: em(150);
      }

      &:nth-child(3) {
        margin-top: em(-22);

        @include media-breakpoint-down(sm) {
          margin-top: 0;
        }
      }

      &:nth-child(4) {
        @include media-breakpoint-down(sm) {
          padding-top: em(16);
        }
      }

      .icon {
        &--rankia {
          width: em(201);
          height: em(85);

          @include media-breakpoint-down(sm) {
            width: em(149);
            height: em(63);
          }
        }
        &--atoz {
          width: em(181);
          height: em(85);

          @include media-breakpoint-down(sm) {
            width: em(134);
            height: em(63);
          }
        }

        &--gbm {
          width: em(181);
          height: em(85);

          @include media-breakpoint-down(sm) {
            width: em(134);
            height: em(63);
          }
        }

        &--pan {
          width: em(181);
          height: em(107);

          @include media-breakpoint-down(sm) {
            width: em(134);
            height: em(79);
          }
        }

        &--world-finance {
          width: em(201);
          height: em(85);

          @include media-breakpoint-down(sm) {
            width: em(149);
            height: em(63);
          }
        }
      }

      .award-title {
        margin-top: em(71);
        text-align: center;

        @include media-breakpoint-down(sm) {
          margin-top: em(19);
        }

        span {
          font-size: em(18);
          font-weight: $font-weight-medium;

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }
      }

      .award-year {
        text-align: center;

        span {
          font-size: em(18);

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }
      }

      .award-text {
        text-align: center;

        span {
          font-size: em(18);

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }
      }
    }
  }

  .submit-button {
    width: em(235);
    height: em(48);

    @include media-breakpoint-down(sm) {
      margin-top: em(32);
      width: 100%;
    }
  }
}
</style>
