<script setup>
import links from '@/constants/links';

const socials = [
  {
    title: 'facebook',
    iconName: 'facebook',
    link: links.FACEBOOK,
  },
  {
    title: 'x',
    iconName: 'x',
    link: links.X,
  },
  {
    title: 'linked-in',
    iconName: 'linked-in',
    link: links.LINKEDIN,
  },
  {
    title: 'instagram',
    iconName: 'instagram',
    link: links.INSTAGRAM,
  },
  {
    title: 'telegram',
    iconName: 'telegram',
    link: links.TELEGRAM,
  },
  {
    title: 'youtube',
    iconName: 'youtube',
    link: links.YOUTUBE,
  },
];
</script>

<template>
  <section class="footer-contacts">
    <div class="content">
      <div class="logo">
        <img
          src="/images/logo-footer.svg"
          :alt="$t('alt.logo2')"
          class="logo"
        />
      </div>

      <div class="info">
        <div class="socials">
          <div class="socials-title">
            <span>
              {{ $t('footer.contacts.findUs') }}
            </span>
          </div>
          <div class="icons">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              target="_blank"
              class="icon"
            >
              <CPicture
                :src="`/images/socials/${social.iconName}.svg`"
                :alt="social.title"
                loading="lazy"
                :class="`icon--${social.iconName}`"
              />
            </a>
          </div>
        </div>

        <div class="hidden-desktop divider" />

        <div class="address">
          <div class="address-title">
            {{ $t('footer.contacts.title') }}
          </div>
          <div class="address-text">
            {{ $t('footer.contacts.address') }}
          </div>
        </div>
      </div>
    </div>

    <div class="hidden-mobile divider" />
  </section>
</template>

<style scoped lang="scss">
.footer-contacts {
  margin-top: em(40);
  margin-bottom: em(30);
  color: $color-white;

  @include media-breakpoint-down(sm) {
    margin-top: em(48);
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: em(30);

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }

    .logo {
      width: em(271);
      height: em(31);

      @include media-breakpoint-down(sm) {
        width: em(262);
        height: em(30);
      }
    }

    .info {
      display: flex;
      flex-direction: row;
      gap: em(128);

      @include media-breakpoint-down(sm) {
        width: 100%;
        flex-direction: column;
        gap: 0;
      }

      .socials {
        display: flex;
        flex-direction: column;
        gap: em(4);

        @include media-breakpoint-down(sm) {
          flex-direction: column;
          width: 100%;
          margin-top: em(30);
        }

        .socials-title {
          margin-right: em(6);

          @include media-breakpoint-down(sm) {
            margin-right: 0;
          }

          span {
            font-size: em(16);
            font-weight: $font-weight-regular;
            color: $color-grey-400;
          }
        }

        .icons {
          display: flex;
          margin-left: em(-18);

          html[lang='ar'] & {
            margin-left: 0;
            margin-right: em(-18);
          }

          @include media-breakpoint-down(sm) {
            margin-top: em(12);
            gap: em(6);
          }

          .icon {
            padding: em(18);
            transition: opacity ease-out $time-normal;

            @include media-breakpoint-down(sm) {
              padding: 0 em(18);
            }

            @include hover {
              opacity: 0.75;
            }

            &--instagram {
              width: em(16);
              height: em(16);
              transform: translateY(em(1));

              @include media-breakpoint-down(sm) {
                width: em(20);
                height: em(20);
                transform: translateY(em(2));
              }
            }

            &--linked-in {
              width: em(18);
              height: em(16);

              @include media-breakpoint-down(sm) {
                width: em(21);
                height: em(20);
              }
            }

            &--facebook {
              width: em(9);
              height: em(16);

              @include media-breakpoint-down(sm) {
                width: em(11);
                height: em(20);
              }
            }

            &--x {
              width: em(16);
              height: em(15);

              @include media-breakpoint-down(sm) {
                width: em(25);
                height: em(22);
              }
            }

            &--telegram {
              width: em(17);
              height: em(15);
              transform: translateY(em(2));

              @include media-breakpoint-down(sm) {
                width: em(24);
                height: em(23);
                transform: translateY(em(1));
              }
            }

            &--youtube {
              width: em(19);
              height: em(13);
              transform: translateY(em(3));

              @include media-breakpoint-down(sm) {
                width: em(29);
                height: em(20);
              }
            }
          }
        }
      }

      .address {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: em(12);
        max-width: em(270);

        @include media-breakpoint-down(sm) {
          max-width: 100%;
        }

        .address-title {
          font-size: em(16);
          font-weight: $font-weight-regular;
          color: $color-grey-400;
        }

        .address-text {
          font-size: em(16);
          font-weight: $font-weight-regular;

          @include media-breakpoint-down(sm) {
            font-size: em(16);
          }
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: em(2);
    margin-top: em(36);
    background: linear-gradient(90deg, #c30044 0%, #fff 100%);

    @include media-breakpoint-down(sm) {
      margin: em(30) 0 em(22);
    }
  }
}
</style>
