import { createDoctor, deleteDoctor, getAllDoctor, getDoctorById, updateDoctor } from "@/api/doctors";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateDoctor = () => {
  return useMutation({
    mutationFn: createDoctor,
  });
};

export const useGetDoctorById = (id: number) => {
  return useQuery({
    queryKey: ["Doctor", id],
    queryFn: () => getDoctorById(id),
    enabled: !!id,
  });
};

export const useUpdateDoctor = () => {
  return useMutation({
    mutationFn: updateDoctor,
  });
};

export const useDeleteDoctor = () => {
  return useMutation({
    mutationFn: deleteDoctor,
  });
};

export const useGetAllDoctor = () => {
  return useQuery({
    queryKey: ["Doctor"],
    queryFn: getAllDoctor,
  });
};
