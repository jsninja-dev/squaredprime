<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import languages from '@/configs/languages.js';

const { locale, setLocale } = useI18n();

const isOpen = ref(false);
const selectedLang = ref(languages.find((lang) => lang.value === locale.value));

const emit = defineEmits(['change']);

const handleChange = async () => {
  const langCode = selectedLang.value.value;
  await setLocale(langCode);
  const html = document.querySelector('html');
  html?.setAttribute('lang', langCode);
  html?.setAttribute('dir', langCode === 'ar' ? 'rtl' : 'ltr');
  emit('change');
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleOptionClick = async (lang, event) => {
  event.stopPropagation();
  isOpen.value = false;
  selectedLang.value = lang;
  await handleChange();
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.lang-bar')) {
    isOpen.value = false;
  }
};

const filteredLanguages = computed(() => {
  return languages.filter((lang) => lang.value !== locale.value);
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="lang-bar">
    <div
      class="header"
      :class="{ 'header--hover': isOpen }"
      @click="toggleDropdown"
    >
      <img
        :src="selectedLang.avatar.src"
        :alt="selectedLang.avatar.alt"
        class="flag"
      />
      <span class="label">
        {{ selectedLang.label }}
      </span>
      <span>
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="#D30044" stroke-width="2" d="M18 9l-6 6-6-6" />
        </svg>
      </span>
    </div>
    <div v-if="isOpen" class="options">
      <div
        v-for="lang in filteredLanguages"
        :key="lang.value"
        class="option"
        @click="handleOptionClick(lang, $event)"
      >
        <img
          v-if="lang.avatar"
          :src="lang.avatar.src"
          :alt="lang.avatar.alt"
          class="flag"
        />
        <span class="label">
          {{ lang.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-bar {
  position: relative;

  .flag {
    width: em(22);
    height: em(22);
    aspect-ratio: 1/1;
    border-radius: 20%;
  }

  .label {
    color: $color-white;
    font-size: em(16);
    font-weight: $font-weight-regular;
  }

  .header {
    padding-inline: em(12);
    flex-shrink: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(16);

    @include media-breakpoint-down(sm) {
      justify-content: start;
    }

    .arrow {
      width: em(24);
      height: em(24);

      @include media-breakpoint-down(sm) {
        width: em(20);
        height: em(20);
      }
    }
  }

  .options {
    background: $color-black-1000;
    position: absolute;
    top: em(32);
    width: 100%;
    z-index: 2;
    border-top: none;
    border-bottom-left-radius: em(3);
    border-bottom-right-radius: em(3);
    height: em(320);
    overflow-y: auto;

    .option {
      padding: em(12) em(12);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: em(16);

      &:hover {
        background: $color-black-900;
      }
    }
  }
}

.header--hover .arrow {
  transform: rotate(180deg);
}
</style>
