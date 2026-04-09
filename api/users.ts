import { UpdateUser, User } from "@/types/user.types";
import instance from "./instance";

export const createUser = async (data: User) => {
  try {
    const res = await instance.post("/users", data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const changeEmail = async (data: { id: number; email: string }) => {
  try {
    const res = await instance.post("/users/change-email", data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllUser = async () => {
  try {
    const res = await instance.get("/users");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getUserById = async (id: number) => {
  try {
    const res = await instance.get(`/users/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateUser = async ({ id, data }: UpdateUser) => {
  try {
    const res = await instance.patch(`/users/${id}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const res = await instance.delete(`/users/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
