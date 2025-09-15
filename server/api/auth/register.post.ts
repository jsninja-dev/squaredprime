export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BACKOFFICE_TOKEN}`,
    };

    // register user
    const registeredUser = await $fetch<{ id: string }>(
      `${process.env.API_BASE_URL}/rest/users/new`,
      {
        method: 'POST',
        body: body,
        headers: headers,
      },
    );

    return {
      status: 'success',
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: 'Registration failed',
      data: error?.response,
    });
  }
});
