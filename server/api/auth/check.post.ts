export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (!body.email && !body.phone) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields',
    });
  }

  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BACKOFFICE_TOKEN}`,
    };

    const response = await $fetch<any[]>(
      `${process.env.API_BASE_URL}/rest/users`,
      {
        method: 'POST',
        body: body,
        headers: headers,
      },
    );

    return {
      status: response.length === 0
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: 'Check failed',
      data: {
        response: error?.response,
      },
    });
  }
});
