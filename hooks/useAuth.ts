import { register, signIn } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });

// export const useSignOut = () => {
//   return useMutation({
//     mutationFn: signOut,
//   });
// };

// export const useRefreshToken = () => {
//   return useMutation({
//     mutationFn: refreshToken,
//   });
// };
