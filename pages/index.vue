<script setup>
import links from '@/constants/links';

const buttonLinks = computed(() => [links.LOGIN]);

//<editor-fold desc="UTM">
const { getUrlWithUtm, hasUtmParameters } = useUtm();

onMounted(() => {
  addUtm();
});

function addUtm() {
  if (!hasUtmParameters.value) return;

  buttonLinks.value.forEach((link) => {
    const urlWithUtm = getUrlWithUtm(link);
    const links = document.querySelectorAll(`a[href="${link}"]`);

    links.forEach((link) => {
      link.href = urlWithUtm;
    });
  });
}
</script>

<template>
  <div class="pages-home">
    <SectionHero />
    <SectionQualities id="solutions" />
    <div class="gradient-wrapper">
      <div class="gradient" />
      <SectionChoose id="why_choose" />
      <SectionWorkWith id="work_with" />
      <SectionAccount />
      <SectionSpec />
      <SectionStart />
    </div>
    <SectionAwards />
  </div>
</template>

<style scoped lang="scss">
#solutions,
#why_choose,
#work_with {
  scroll-margin-top: em(240);

  @include media-breakpoint-down(sm) {
    scroll-margin-top: em(80);
  }
}

.gradient-wrapper {
  position: relative;

  .gradient {
    position: absolute;
    top: em(-230);
    bottom: em(500);
    width: 100%;
    background: url('/images/squared-gradient.png');
    background-repeat: repeat;
    background-size: em(960) em(1923);

    @include media-breakpoint-down(sm) {
      background: none;
    }
  }
}
</style>
