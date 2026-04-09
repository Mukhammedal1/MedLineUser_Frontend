import { Specialization, UpdateSpecialization } from "@/types/specialization.types";
import instance from "./instance";

export const createSpecialization = async (data: Specialization) => {
  try {
    const res = await instance.post("/specializations", data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllSpecialization = async () => {
  try {
    const res = await instance.get("/specializations");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getSpecializationById = async (id: number) => {
  try {
    const res = await instance.get(`/specializations/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateSpecialization = async ({ id, data }: UpdateSpecialization) => {
  try {
    const res = await instance.patch(`/specializations/${id}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteSpecialization = async (id: number) => {
  try {
    const res = await instance.delete(`/specializations/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
