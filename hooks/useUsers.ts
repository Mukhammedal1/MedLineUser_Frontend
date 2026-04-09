import { changeEmail, createUser, deleteUser, getAllUser, getUserById, updateUser } from "@/api/users";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

export const useChangeEmail = () => {
  return useMutation({
    mutationFn: changeEmail,
  });
};

export const useGetUserById = (id: number) => {
  return useQuery({
    queryKey: ["User", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUser,
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};

export const useGetAllUser = () => {
  return useQuery({
    queryKey: ["User"],
    queryFn: getAllUser,
  });
};
