import { Appointment, UpdateAppointment } from "@/types/appointment.types";
import instance from "./instance";

export const createAppointment = async (data: Appointment) => {
  try {
    const res = await instance.post("/appointments", data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllAppointment = async () => {
  try {
    const res = await instance.get("/appointments");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getDoctorSlots = async (id: number) => {
  try {
    const res = await instance.get(`/appointments/doctor-slots/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllAppointmentByUserId = async (id: number) => {
  try {
    const res = await instance.get(`/appointments/user-tickets/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAppointmentById = async (id: number) => {
  try {
    const res = await instance.get(`/appointments/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateAppointment = async ({ id, data }: UpdateAppointment) => {
  try {
    const res = await instance.patch(`/appointments/${id}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteAppointment = async (id: number) => {
  try {
    const res = await instance.delete(`/appointments/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
