import {
  createAppointment,
  deleteAppointment,
  getAllAppointment,
  getAllAppointmentByUserId,
  getAppointmentById,
  getDoctorSlots,
  updateAppointment,
} from "@/api/appointment";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateAppointment = () => {
  return useMutation({
    mutationFn: createAppointment,
  });
};

export const useGetAppointmentById = (id: number) => {
  return useQuery({
    queryKey: ["Appointment", id],
    queryFn: () => getAppointmentById(id),
    enabled: !!id,
  });
};

export const useGetDoctorSlots = (id: number) => {
  return useQuery({
    queryKey: ["DoctorSlots", id],
    queryFn: () => getDoctorSlots(id),
    enabled: !!id,
  });
};

export const useGetAppointmentByUserId = (id: number) => {
  return useQuery({
    queryKey: ["UserAppointment", id],
    queryFn: () => getAllAppointmentByUserId(id),
    enabled: !!id,
  });
};

export const useUpdateAppointment = () => {
  return useMutation({
    mutationFn: updateAppointment,
  });
};

export const useDeleteAppointment = () => {
  return useMutation({
    mutationFn: deleteAppointment,
  });
};

export const useGetAllAppointment = () => {
  return useQuery({
    queryKey: ["Appointment"],
    queryFn: getAllAppointment,
  });
};
