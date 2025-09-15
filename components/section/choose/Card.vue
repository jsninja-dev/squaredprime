<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  items: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const { tm, rt } = useI18n();

const textArray = computed(() => tm(props.items).map(rt));

function getBackground() {
  if (props.id === 0) {
    return 'linear-gradient(20deg, #040714 48.2%, #C30044 129.65%)';
  }
  if (props.id === 1) {
    return 'linear-gradient(191deg, #040714 64.21%, #C30044 118.75%)';
  }
  if (props.id === 2) {
    return 'linear-gradient(352deg, #040714 64.73%, #C30044 114.23%)';
  }
  if (props.id === 3) {
    return 'linear-gradient(211deg, #040714 54.93%, #C30044 120.21%)';
  }
  if (props.id === 4) {
    return 'linear-gradient(156deg, #040714 47.23%, #C30044 128.64%)';
  }
  if (props.id === 5) {
    return 'linear-gradient(62deg, #040714 47.09%, #C30044 128.13%)';
  }
}
</script>

<template>
  <div class="choose-card">
    <CPicture
      src="/images/choose/gradient.png"
      class="gradient"
      :class="`gradient--${position}`"
    />
    <div class="title">
      <span v-html="$t(title)" />
    </div>
    <div class="description">
      <div v-for="(item, index) in textArray" :key="index" class="item">
        <span v-html="item" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choose-card {
  overflow: hidden;
  background: v-bind(getBackground());
  position: relative;
  width: 100%;
  height: 100%;
  padding: em(54) em(60) em(40);
  z-index: 1;

  @include media-breakpoint-down(sm) {
    padding: em(20) em(15);
  }

  .gradient {
    position: absolute;
    z-index: -1;

    &--top {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
    &--bottom {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
    &--left {
      bottom: 0;
      left: -100%;
      width: 100%;
      height: auto;
      rotate: 90deg;
      transform-origin: right bottom;
    }
    &--right {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: auto;
      rotate: -90deg;
      transform-origin: left bottom;
    }
  }

  .title {
    margin-bottom: em(56);

    @include media-breakpoint-down(sm) {
      margin-bottom: em(12);
      min-height: em(45);
    }

    span {
      color: $color-white;
      font-size: em(24);
      font-weight: $font-weight-medium;
      line-height: 123.358%;

      @include media-breakpoint-down(sm) {
        font-size: em(18);
        font-weight: $font-weight-semi-bold;
      }
    }
  }

  .description {
    .item {
      &:not(:last-child) {
        padding-bottom: em(8);
        border-bottom: em(1) solid rgba(128, 128, 128, 0.3);
        margin-bottom: em(8);

        @include media-breakpoint-down(sm) {
          padding-bottom: em(4);
          margin-bottom: em(4);
        }
      }

      span {
        color: $color-white;
        font-size: em(20);
        font-weight: $font-weight-light;
        line-height: 123.358%;

        @include media-breakpoint-down(sm) {
          font-size: em(14);
        }

        &:deep(strong) {
          font-weight: $font-weight-medium;
        }
      }
    }
  }
}
</style>
