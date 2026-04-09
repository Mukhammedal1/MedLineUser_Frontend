import { UploadImageData } from "@/types/image.types";
import instance from "./instance";

export const uploadImage = async (data: UploadImageData) => {
  try {
    const formData = new FormData();
    formData.append("image", data.file);

    const res = await instance.post("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteImage = async (id: number) => {
  try {
    const res = await instance.delete(`/images/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllImages = async () => {
  try {
    const res = await instance.get("/images");
    return res.data;
  } catch (e) {
    throw e;
  }
};
