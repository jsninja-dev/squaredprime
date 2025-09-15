<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2';

import { useAuth } from '@/composables/useAuth';
import { useUtm } from '@/composables/useUtm';
import { useID } from '@/composables/useID';

const { registerUser } = useAuth();
const { getUtmString, regUtmChannel } = useUtm();
const { getIdValue } = useID();
const { locale, t } = useI18n();

const FormStatus = {
  EDITING: 0,
  SUBMITTING: 1,
  SUCCESS: 2,
};
const name = ref('');
const isNameValid = ref(false);
const phone = ref('+376');
const isPhoneValid = ref(false);
const country = ref('AD');
const formStatus = ref(FormStatus.EDITING);
const email = ref('');
const isEmailValid = ref(false);
const company = ref('');
const isCompanyValid = ref(false);
const message = ref('');

const isDisabled = computed(() => {
  return (
    !isNameValid.value ||
    !isPhoneValid.value ||
    !isEmailValid.value ||
    !isCompanyValid.value
  );
});

const emailInputRef = ref(null);
const nameInputRef = ref(null);
const phoneInputRef = ref(null);
const companyInputRef = ref(null);
const messageInputRef = ref(null);

const handleSubmit = async () => {
  const updateArray = [
    {
      name: 'utm_campaign',
      value: 'SQF_WEBSITE_SC',
    },
  ];
  const formData = {
    utmParams: getUtmString(updateArray),
    language: locale.value,
    referrer: window.location.href.slice(0, 255),
    customFields: {
      custom_registration_source: 'SQF_WEBSITE_SC',
      custom_registration_step_field: 2,
      custom_registration_utm_channel: regUtmChannel(),
    },
    tags: ['SQF_WEBSITE_SC'],
    firstName: name.value.split(' ')[0] || '',
    lastName: name.value.split(' ')[1] || '',
    country: country.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
    message: message.value,
    lead: false,
    testProfile: true,
  };

  // get the cxd value from the url
  const route = useRoute();
  if (route.query.cxd) {
    const cxd = route.query.cxd;
    formData.cellxpertCxd = cxd;
  }

  if (getIdValue('fbclid')) {
    formData.customFields.custom_fclid = getIdValue('fbclid');
  }
  if (getIdValue('gclid')) {
    formData.customFields.custom_gclid = getIdValue('gclid');
  }

  try {
    formStatus.value = FormStatus.SUBMITTING;
    const response = await registerUser(formData);
    if (response.status === 'success') {
      const urlToOpen = response.data.url;
      const newWindow = window.open(urlToOpen, '_blank');
      if (!newWindow) {
        window.location.href = urlToOpen;
      }
    }
    formStatus.value = FormStatus.SUCCESS;
  } catch (err) {
    formStatus.value = FormStatus.EDITING;
    showErrorModal();
  }
};

const showErrorModal = () => {
  Swal.fire({
    title: t('common.form.formError.title'),
    text: t('common.form.formError.text'),
    icon: 'error',
    confirmButtonText: t('common.form.formError.button'),
    confirmButtonColor: '#c30044',
    customClass: {
      title: 'swal2-title',
      content: 'swal2-content',
      confirmButton: 'swal2-confirm',
    },
  });
};

const onEnter = (event) => {
  event.preventDefault();
  if (!isDisabled.value && formStatus.value === FormStatus.EDITING) {
    handleSubmit();
  }
};
</script>

<template>
  <div>
    <div
      class="ui-form"
      @keydown.enter="onEnter"
      v-if="
        formStatus === FormStatus.EDITING ||
        formStatus === FormStatus.SUBMITTING
      "
    >
      <div class="header">
        <span class="header-text">
          {{ $t('common.form.header') }}
        </span>
        <span class="square-dot dot" />
      </div>
      <UiNameInput
        ref="nameInputRef"
        v-model="name"
        class="form-input"
        @validation="isNameValid = $event"
      />
      <UiEmailInput
        ref="emailInputRef"
        v-model="email"
        class="form-input"
        @validation="isEmailValid = $event"
      />
      <UiPhoneInput
        ref="phoneInputRef"
        v-model="phone"
        class="form-input"
        @validation="isPhoneValid = $event"
      />
      <UiCompanyInput
        ref="companyInputRef"
        v-model="company"
        class="form-input"
        @validation="isCompanyValid = $event"
      />
      <UiTextareaInput
        ref="messageInputRef"
        v-model="message"
        class="form-input"
      />
      <UiCountrySelect v-model="country" class="form-input" />
      <UiButton
        v-if="formStatus === FormStatus.EDITING"
        class="submit-button partner-program-lp"
        :disabled="isDisabled"
        @click="handleSubmit"
      >
        <span class="partner-program-lp" v-html="$t('common.requestButton')" />
      </UiButton>
      <UiButton v-else class="submit-button" :disabled="true">
        <CPicture src="/images/form/loading-white.svg" class="button-icon" />
      </UiButton>
    </div>
    <div class="ui-success-form" v-if="formStatus === FormStatus.SUCCESS">
      <UiGradientText class="header">
        <span class="header-text">
          {{ $t('common.success.title') }}
        </span>
        <span class="square-dot dot" />
      </UiGradientText>
      <div class="content">
        <p class="subtitle">
          <span v-html="$t('common.success.subtitle')" />
        </p>
        <p class="text">
          <span v-html="$t('common.success.text')" />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-form {
  width: em(700);
  padding: em(40) em(45) em(40);
  display: flex;
  flex-direction: column;
  gap: em(30);
  background-color: $color-white;
  border: em(2) solid $color-black-200;
  backdrop-filter: blur(em(10));

  @include media-breakpoint-down(sm) {
    width: 100%;
    padding: em(28) em(20) em(32);
    gap: em(20);
  }

  .header {
    text-align: center;
    padding-bottom: em(20);

    @include media-breakpoint-down(sm) {
      padding-bottom: em(16);
    }

    .header-text {
      color: $color-black-1000;
      font-size: em(56);
      font-weight: $font-weight-semi-bold;
      line-height: 100%;

      @include media-breakpoint-down(sm) {
        font-size: em(24);
      }
    }

    html[lang='vi'] .header-text {
      font-size: em(30);
    }

    .dot {
      width: em(30);
      height: em(30);
      margin-left: em(4);

      @include media-breakpoint-down(sm) {
        width: em(13);
        height: em(13);
        margin-left: em(4);
      }

      html[lang='ar'] & {
        margin-left: 0;
        margin-right: em(4);
      }
    }
  }

  .submit-button {
    width: 100%;
    height: em(48);

    &:disabled {
      opacity: 0.5;
    }

    span {
      color: $color-white;
      font-size: em(18);
      font-weight: $font-weight-medium;
    }
  }

  .submit-button {
    width: 100%;

    @include media-breakpoint-down(sm) {
      width: calc(100% - em(2));
      margin-inline: em(1);
    }

    .button-icon {
      width: em(24);
      height: em(24);
    }
  }
}

.ui-success-form {
  width: em(498);
  padding: em(33) em(53) em(34);
  display: flex;
  flex-direction: column;
  gap: em(14);
  background-color: $color-white;

  @include media-breakpoint-down(sm) {
    width: 100%;
    padding: em(36) 0 em(20);
    gap: em(18);
  }

  .header {
    text-align: center;
    padding-bottom: em(20);

    @include media-breakpoint-down(sm) {
      padding-bottom: em(16);
    }

    .header-text {
      font-size: em(32);
      font-weight: $font-weight-semi-bold;
      line-height: 100%;

      @include media-breakpoint-down(sm) {
        font-size: em(24);
      }

      html[lang='vi'] .header-text {
        font-size: em(30);
      }
    }

    .dot {
      width: em(17);
      height: em(17);
      margin-left: em(4);
    }
  }

  .content {
    padding: em(100) 0 em(100);
    text-align: center;

    @include media-breakpoint-down(sm) {
      padding: em(42) 0 em(30);
    }

    .subtitle {
      margin-bottom: em(30);
      span {
        color: $color-black-980;
        font-size: em(24);
        font-weight: $font-weight-medium;
        line-height: 123.358%;

        @include media-breakpoint-down(sm) {
          font-size: em(20);
        }
      }
    }

    .text {
      span {
        color: $color-grey-400;
        font-size: em(18);
        font-weight: $font-weight-regular;
        line-height: 123.358%;

        @include media-breakpoint-down(sm) {
          font-size: em(16);
        }
      }
    }
  }
}
</style>
