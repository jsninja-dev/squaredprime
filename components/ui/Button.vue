<script setup>
const props = defineProps({
  scrollTo: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
  },
});

const handleClick = () => {
  if (props.scrollTo) {
    const targetSection = document.getElementById(props.scrollTo);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (props.to) {
    router.push(props.to);
  }
};
</script>

<template>
  <button class="ui-button" @click="handleClick">
    <slot>
      <span v-if="text" class="text" v-html="text" />
    </slot>
  </button>
</template>

<style scoped lang="scss">
@use 'sass:color';

.ui-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: em(6);
  background: $color-red-700;

  @include hover {
    background-color: color.adjust($color-red-700, $lightness: 5%);
  }

  .text {
    color: $color-white;
    font-size: em(18);
    font-weight: $font-weight-medium;
  }
}
</style>
