export const registerUser = (email: string) => {
  return {
    message: "User registered successfully",
    user: {
      email,
    },
  };
};
