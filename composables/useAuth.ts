interface CheckData {
  email?: string;
  phone?: string;
}

interface RegisterData {
  utmParams: string;
  language: string;
  referrer: string;
  customFields: {
    custom_registration_source: string;
    custom_registration_step_field: number;
    custom_registration_utm_channel: string;
    custom_fclid?: string;
    custom_gclid?: string;
  };
  tags: string[];
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phone: string;
  lead: boolean;
  testProfile: boolean;
  company: string;
  cellxpertCxd?: string;
}

export const useAuth = () => {
  const checkUser = async (data: CheckData) => {
    const { status } = await $fetch<{ status: boolean }>('/api/auth/check', {
      method: 'POST',
      body: data,
    });
    return status;
  };

  const registerUser = async (data: RegisterData) => {
    const domain = window.location.hostname;
    if (
      data.firstName.toLowerCase().startsWith('sqfin') ||
      domain !== 'partners.sqfin.com'
    ) {
      data.testProfile = true;
    } else {
      data.testProfile = false;
    }

    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: data,
    });
    return response;
  };

  return {
    checkUser,
    registerUser,
  };
};
