export const registerUser = async (email: string) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("done");
    }, 2000),
  );

  return {
    message: "User registered successfully",
    user: {
      email,
    },
  };
};
