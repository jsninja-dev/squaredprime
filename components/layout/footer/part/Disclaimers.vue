<script setup>
import { disclaimers } from '@/configs/disclaimers';
import { rightLinks } from '@/configs/rightLinks';
import links from '@/constants/links';

const { $tp } = useNuxtApp();
const { t } = useI18n();

const getDisclaimerText = (disclaimer) => {
  if (disclaimer.sdLink) {
    const sdLink = `<a style="text-decoration: underline;" href="${links.SD024}" target="_blank">${t(disclaimer.sdLink)}</a>`;
    return $tp(t(disclaimer.text, { sdLink }));
  }
  return $tp(t(disclaimer.text));
};
</script>

<template>
  <section class="footer-disclaimers">
    <div class="disclaimers-container">
      <div
        v-for="(disclaimer, index) in disclaimers"
        :key="index"
        class="disclaimer"
        :class="`disclaimer--${disclaimer.alias}`"
      >
        <div class="title">
          <span v-html="$t(disclaimer.title)" />
        </div>

        <div class="text">
          <span v-html="getDisclaimerText(disclaimer)" />
        </div>
      </div>
    </div>
    <div class="rights">
      <div class="title">
        <img src="/favicon.svg" alt="icon" class="icon hidden-desktop" />
        <span v-html="$t('footer.disclaimers.rights.title')" />
      </div>
      <div class="links">
        <a
          v-for="(rightLink, index) in rightLinks"
          :key="index"
          class="link"
          :href="`${links[rightLink.link]}`"
          target="_blank"
        >
          {{ $t(rightLink.title) }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.footer-disclaimers {
  margin-top: em(36);
  display: flex;
  flex-direction: column;
  gap: em(84);

  @include media-breakpoint-down(sm) {
    gap: em(27);
    flex-direction: column;
  }

  .disclaimers-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: em(10);

    @include media-breakpoint-down(sm) {
      order: 2;
      flex-direction: column;
      gap: em(0);
    }

    .disclaimer {
      &:not(:last-child) {
        @include media-breakpoint-down(sm) {
          margin-bottom: em(29);
        }
      }

      &--risk-warning {
        width: em(365);
        text-align: justify;

        @include media-breakpoint-down(sm) {
          width: 100%;
        }
      }

      &--disclaimers {
        width: em(366);
        text-align: justify;

        @include media-breakpoint-down(sm) {
          width: 100%;
        }
      }

      &--legal {
        width: em(762);
        text-align: justify;

        @include media-breakpoint-down(sm) {
          width: 100%;
        }
      }
      .title {
        margin-bottom: em(20);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(18);
        }

        span {
          color: $color-white;
          font-size: em(16);
          font-weight: $font-weight-regular;

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }
      }

      .text {
        span {
          color: $color-grey-400;
          font-size: em(16);

          @include media-breakpoint-down(sm) {
            font-size: em(14);
          }
        }
      }
    }
  }

  .rights {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: em(54);

    @include media-breakpoint-down(sm) {
      order: 1;
      align-items: flex-end;
      gap: em(36);
      padding-bottom: em(30);

      html[lang='es'] & {
        gap: em(8);
      }

      html[lang='vi'] & {
        gap: em(8);
      }

      html[lang='pt'] & {
        gap: em(8);
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: em(1);
        background-color: $color-grey-200;
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      gap: em(30);

      @include media-breakpoint-down(sm) {
        width: em(180);
        flex-grow: 0;
      }

      .icon {
        width: em(30);
        height: em(30);
      }
      span {
        color: $color-grey-400;
        font-size: em(16);
        font-weight: $font-weight-regular;

        @include media-breakpoint-down(sm) {
          font-size: em(14);
        }
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      gap: em(32);

      @include media-breakpoint-down(sm) {
        flex-direction: column;
        gap: em(20);
      }

      .link {
        color: $color-red-700;
        font-size: em(16);
        font-weight: $font-weight-medium;

        @include media-breakpoint-down(sm) {
          font-size: em(14);
        }
      }
    }
  }
}
</style>
