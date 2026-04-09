import { Doctor, UpdateDoctor } from "@/types/doctor.types";
import instance from "./instance";

export const createDoctor = async (data: Doctor) => {
  try {
    const res = await instance.post("/doctors", data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllDoctor = async () => {
  try {
    const res = await instance.get("/doctors");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getDoctorById = async (id: number) => {
  try {
    const res = await instance.get(`/doctors/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateDoctor = async ({ id, data }: UpdateDoctor) => {
  try {
    const res = await instance.patch(`/doctors/${id}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteDoctor = async (id: number) => {
  try {
    const res = await instance.delete(`/doctors/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
