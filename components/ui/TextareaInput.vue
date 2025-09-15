<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Props {
  modelValue: string;
  placeholder?: string;
  rows?: number;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  rows: 4,
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const isFocused = ref(false);
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const hasValue = computed(() => props.modelValue.length > 0);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const handleInput = () => {
  emit('update:modelValue', inputValue.value);
};
</script>

<template>
  <div>
    <div class="textarea-wrapper">
      <label
        class="textarea-label"
        :class="{ 'is-active': isFocused || hasValue }"
      >
        <span class="textarea-label__font">{{ $t('common.form.message') }}</span>
      </label>

      <textarea
        ref="textareaRef"
        v-model="inputValue"
        :placeholder="placeholder"
        :rows="rows"
        class="input-field textarea-field textarea-field__font"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        :class="{
          'is-focused': isFocused,
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.textarea-wrapper {
  position: relative;
  width: 100%;
}

.textarea-field {
  width: 100%;
  min-height: em(100);
  resize: vertical;
  transition: all 0.2s ease;
  padding-block: em(16);

  &__font {
    color: $color-black;
    font-size: em(18);
    font-weight: $font-weight-regular;
    line-height: 1.5;

    @include media-breakpoint-down(sm) {
      font-size: em(16);
    }
  }
}

.textarea-wrapper .is-focused {
  border-color: #3b82f6;
}

.textarea-label {
  position: absolute;
  left: em(13);
  top: em(24);
  transition: all 0.2s ease;
  pointer-events: none;
  background: white;
  padding: 0 em(4);
  color: $color-grey-500;

  html[dir='rtl'] & {
    left: auto;
    right: em(13);
  }

  &__font {
    font-size: em(18);
    font-weight: $font-weight-regular;
  }
}

.textarea-label.is-active {
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
</style>

