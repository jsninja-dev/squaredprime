export const useIpGeolocation = () => {
  const getIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (err) {
      return null;
    }
  };

  const getCountryFromIpstack = async (ip) => {
    try {
      const response = await $fetch('/api/geo-location/ipstack', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        query: { ip },
      });
      return response.data.country_code;
    } catch (err) {
      return null;
    }
  };

  const getCountryFromIpgeo = async (ip) => {
    try {
      const response = await $fetch('/api/geo-location/ipgeo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        query: { ip },
      });
      return response.data.country_code2;
    } catch (err) {
      return null;
    }
  };

  const getCountry = async () => {
    try {
      // Get IP address first
      const ip = await getIpAddress();
      if (!ip) {
        return null;
      }

      // Try ipstack first
      const ipstackCountry = await getCountryFromIpstack(ip);
      if (ipstackCountry) {
        return ipstackCountry;
      }

      // If ipstack fails, try ipgeolocation
      const ipgeoCountry = await getCountryFromIpgeo(ip);
      if (ipgeoCountry) {
        return ipgeoCountry;
      }

      return null;
    } catch (err) {
      return null;
    }
  };

  return {
    getCountry,
    getIpAddress,
  };
};
