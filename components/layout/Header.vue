<script setup>
import { headerTabs } from '@/configs/headerTabs';
import { nextTick, ref, onMounted, onUnmounted } from 'vue';
import links from '@/constants/links';
import { useUtm } from '@/composables/useUtm';

const isMenuOpen = ref(false);
const { locale } = useI18n();
const { getUrlWithUtm } = useUtm();
const { scrollToForm } = useScroll();

function scrollToSection(sectionId) {
  isMenuOpen.value = false;
  console.log(sectionId);
  const targetSection = document.getElementById(sectionId);
  console.log(targetSection);
  if (targetSection) {
    nextTick(() => targetSection.scrollIntoView({ behavior: 'smooth' }));
  }
}

const loginLink = computed(() => {
  const loginUrl =
    links.LOGIN + (locale.value === 'en' ? '' : locale.value + '/') + 'login';
  const urlWithUtm = getUrlWithUtm(loginUrl);
  return urlWithUtm;
});

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.layout-header')) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header class="layout-header">
    <div class="ui-container header-container">
      <div class="content">
        <div class="heading">
          <img
            src="/images/logo.svg"
            alt="SquaredFinancial Logo"
            class="logo"
          />
          <div class="buttons">
            <a
              class="btn-login hidden-mobile"
              :href="loginLink"
              target="_blank"
            >
              <img src="/images/header/login.svg" alt="client" />
              <span>
                {{ $t('header.login') }}
              </span>
            </a>
            <UiButton class="btn-apply" @click="scrollToForm">
              <span>
                {{ $t('common.requestButton') }}
              </span>
            </UiButton>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            class="hamburger-menu hidden-desktop"
            @click="isMenuOpen = !isMenuOpen"
          >
            <path d="M0 1.5H25M0 10.5H25" stroke="white" stroke-width="2" />
          </svg>
        </div>
        <div class="tabs hidden-mobile">
          <div class="tabs-container">
            <button
              v-for="tab in headerTabs"
              :key="tab.title"
              class="tab"
              @click="scrollToSection(tab.link)"
            >
              <span>
                {{ $t(tab.title) }}
              </span>
            </button>
          </div>
          <UiSelectLang />
        </div>
      </div>
    </div>
    <div class="mobile-menu hidden-desktop" :class="{ 'is-open': isMenuOpen }">
      <div class="ui-container">
        <div class="mobile-header">
          <img
            src="/images/logo.svg"
            alt="SquaredFinancial Logo"
            class="logo"
          />
          <UiButton
            class="btn-apply"
            @click="
              () => {
                isMenuOpen = false;
                scrollToForm();
              }
            "
          >
            <span>
              {{ $t('common.requestButton') }}
            </span>
          </UiButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            class="hamburger-menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <path
              d="M1.06465 26.4733L26 1.5M25.9354 26.5L1 1.52674"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div class="mobile-content">
          <div class="content-header">
            <UiSelectLang @change="isMenuOpen = false" />
            <a
              class="btn-login"
              :href="loginLink"
              target="_blank"
              @click="isMenuOpen = false"
            >
              <img src="/images/header/login.svg" alt="client" />
              <span>
                {{ $t('header.login') }}
              </span>
            </a>
          </div>
          <div class="tabs">
            <button
              v-for="tab in headerTabs"
              :key="tab.title"
              class="tab"
              @click="scrollToSection(tab.link)"
            >
              <span>
                {{ $t(tab.title) }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.layout-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;

  .header-container {
    max-width: em(1904);

    @include media-breakpoint-down(sm) {
      max-width: auto;
    }

    .content {
      margin-top: em(30);
      padding: em(30);
      padding-bottom: em(20);
      border-radius: em(6);
      background: rgba(4, 7, 20, 0.8);
      backdrop-filter: blur(em(14));

      @include media-breakpoint-down(sm) {
        margin-top: em(16);
        padding: em(8) em(10);
        border-radius: em(2);
      }

      .heading {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0;
        padding-bottom: em(24);

        @include media-breakpoint-down(sm) {
          padding-bottom: 0;
          gap: em(12);
          width: 100%;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: em(4);
          background: linear-gradient(90deg, #c30044 0%, #c5cbd5 100%);

          @include media-breakpoint-down(sm) {
            display: none;
          }
        }

        .buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: em(30);
        }
      }
    }
  }

  .is-open {
    left: 0 !important;
    transition: left 0.2s ease-in-out;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    z-index: 501;
    background: linear-gradient(211deg, #000 42.1%, #3a558f 103.9%);
    transition: left 0.2s ease-in-out;

    .mobile-header {
      position: relative;
      margin-top: em(8);
      padding: em(16) em(10);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: em(2);
        background: linear-gradient(90deg, #c30044 0%, #c5cbd5 100%);
      }
    }

    .mobile-content {
      display: flex;
      flex-direction: column;
      gap: em(24);

      .content-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: em(16);
      }
    }
  }

  .logo {
    width: auto;
    height: em(32);

    @include media-breakpoint-down(sm) {
      height: em(16);
      width: em(160);
      flex-shrink: 1;
    }
  }

  .btn-apply {
    width: em(192);
    height: em(48);

    @include media-breakpoint-down(sm) {
      width: em(115);
      height: em(40);
      flex-shrink: 0;
    }

    span {
      color: $color-white;
      font-size: em(18);
      font-weight: $font-weight-medium;

      @include media-breakpoint-down(sm) {
        font-size: em(14);
      }
    }
  }

  .btn-login {
    padding: em(16) 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: em(10);

    @include media-breakpoint-down(sm) {
    }

    img {
      width: em(18);
      height: em(22);
    }

    span {
      color: $color-white;
      font-size: em(18);
      font-weight: $font-weight-medium;

      @include media-breakpoint-down(sm) {
        font-size: em(16);
      }
    }
  }

  .hamburger-menu {
    width: em(25);
    height: em(25);
    flex-shrink: 0;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: em(20);
    gap: em(16);

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: flex-start;
      gap: em(12);
      margin-top: 0;
      padding-bottom: em(24);
      background-image: url('#{$images-path}/header/dot.svg');
      background-repeat: repeat;
      background-position: em(24) em(24);
      background-size: em(24);
    }

    .tabs-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: em(32);

      @include media-breakpoint-down(sm) {
        flex-direction: column;
        gap: em(28);
        align-items: flex-start;
      }
    }

    .tab {
      border: none;
      background: none;
      text-align: center;

      @include media-breakpoint-down(sm) {
        max-width: 100%;
        text-align: left;
      }

      span {
        color: $color-white;
        font-size: em(16);
        font-weight: $font-weight-regular;

        @include media-breakpoint-down(sm) {
          font-size: em(16);
        }
      }
    }
  }
}
</style>
