import { createSpecialization, deleteSpecialization, getAllSpecialization, getSpecializationById, updateSpecialization } from "@/api/useSpecialization";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateSpecialization = () => {
  return useMutation({
    mutationFn: createSpecialization,
  });
};

export const useGetSpecializationById = (id: number) => {
  return useQuery({
    queryKey: ["Specialization", id],
    queryFn: () => getSpecializationById(id),
    enabled: !!id,
  });
};

export const useUpdateSpecialization = () => {
  return useMutation({
    mutationFn: updateSpecialization,
  });
};

export const useDeleteSpecialization = () => {
  return useMutation({
    mutationFn: deleteSpecialization,
  });
};

export const useGetAllSpecialization = () => {
  return useQuery({
    queryKey: ["Specialization"],
    queryFn: getAllSpecialization,
  });
};
