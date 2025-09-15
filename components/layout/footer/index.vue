<script setup></script>

<template>
  <footer class="default-footer">
    <div class="ui-container footer-container">
      <div class="footer-content">
        <LayoutFooterPartContacts class="footer-contacts" />

        <LayoutFooterPartDisclaimers class="footer-disclaimers" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.default-footer {
  position: relative;
  overflow: hidden;

  .footer-content {
    padding: 0 0 em(70);

    @include media-breakpoint-down(sm) {
      padding: 0 0 em(40);
    }
  }
}
</style>
