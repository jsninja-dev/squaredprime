export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const ip = query.ip as string;

  try {
    const response = await $fetch<any[]>(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEOLOCATION_KEY}&ip=${ip}`,
    );

    return {
      status: 'success',
      data: response,
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: 'IP geolocation check failed',
      data: error?.response,
    });
  }
});
