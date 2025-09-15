<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Props {
  modelValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue', 'validation']);

const inputValue = ref(props.modelValue);
const isFocused = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);
const errorStr = ref('');

const hasValue = computed(() => props.modelValue.length > 0);

// Simplified validation for company name
const validateCompanyName = (value) => {
  if (!value) return t('common.error.companyRequired');

  // Trim whitespace and check if empty after trimming
  const trimmedValue = value.trim();
  if (!trimmedValue) return t('common.error.companyRequired');

  // Check maximum length (reasonable limit for company name)
  if (trimmedValue.length > 150) return t('common.error.companyTooLong');

  return true;
};

const validateInput = () => {
  const result = validateCompanyName(inputValue.value);
  if (typeof result === 'string') {
    errorStr.value = result;
    emit('validation', false);
  } else {
    errorStr.value = '';
    emit('validation', true);
  }
};

const handleFocus = () => {
  isFocused.value = true;
  errorStr.value = '';
};

const handleBlur = () => {
  isFocused.value = false;
  validateInput();
};

watch(inputValue, (value) => {
  emit('update:modelValue', value);
  validateInput();
});
</script>

<template>
  <div>
    <div class="input-wrapper">
      <label
        class="input-label"
        :class="{ 'is-active': isFocused || hasValue }"
      >
        <span>{{ $t('common.form.companyName') }}</span>
      </label>

      <input
        ref="inputRef"
        type="text"
        v-model="inputValue"
        class="input-field input-field__font"
        @focus="handleFocus"
        @blur="handleBlur"
        :class="{
          'is-focused': isFocused,
          'has-error': errorStr,
        }"
      />
    </div>
    <span v-if="errorStr" class="error-message">{{ errorStr }}</span>
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  width: 100%;
}

.input-field {
  width: 100%;
  transition: all 0.2s ease;

  &__font {
    color: $color-black;
    font-size: em(18);
    font-weight: $font-weight-regular;

    @include media-breakpoint-down(sm) {
      font-size: em(16);
    }
  }
}

.input-wrapper .has-error {
  border-color: $color-red-700 !important;
}

.input-wrapper .is-focused {
  border-color: #3b82f6;
}

.input-label {
  position: absolute;
  left: em(13);
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
  background: white;
  padding: 0 em(4);
  color: $color-grey-500;

  html[dir='rtl'] & {
    left: auto;
    right: em(13);
  }

  span {
    font-size: em(18);
    font-weight: $font-weight-regular;
  }
}

.input-label.is-active {
  top: 0;
  left: em(12);
  transform: translateY(-50%) scale(0.67);
  transform-origin: left;
  color: $color-black;

  html[dir='rtl'] & {
    left: auto;
    right: em(12);
    transform: translateY(-50%) scale(0.67);
    transform-origin: right;
  }
}

.error-message {
  color: $color-red-700;
  font-size: em(14);

  @include media-breakpoint-down(sm) {
    font-size: em(14);
  }
}
</style>
