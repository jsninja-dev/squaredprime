export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const ip = query.ip as string;

  try {
    const response = await $fetch<any[]>(
      `https://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_KEY}`,
    );

    return {
      status: 'success',
      data: response,
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: 'IP check failed',
      data: error?.response,
    });
  }
});
