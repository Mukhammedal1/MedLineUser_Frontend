import { useMutation, useQuery } from "@tanstack/react-query";
import { uploadImage, deleteImage, getAllImages } from "@/api/images";
import { UploadImageData } from "@/types/image.types";

export const useUploadImage = () => {
  return useMutation({
    mutationFn: (data: UploadImageData) => uploadImage(data),
  });
};

export const useDeleteImage = () => {
  return useMutation({
    mutationFn: (id: number) => deleteImage(id),
  });
};

export const useGetAllImages = () => {
  return useQuery({
    queryKey: ["images"],
    queryFn: getAllImages,
  });
};
