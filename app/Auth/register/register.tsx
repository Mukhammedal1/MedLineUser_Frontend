"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  PageWrapper,
  Card,
  Title,
  Form,
  Input,
  Button,
  LinkText,
  AvatarWrapper,
  AvatarImage,
  HiddenInput,
  ErrorText,
  FlexWrapper,
} from "./register.style";
import { useRegister } from "@/hooks/useAuth";
import { useUploadImage } from "@/hooks/useImages";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [image_id, setImageId] = useState<number | null>(null);
  const { mutate: register, isPending } = useRegister();
  const { mutate: uploadImage } = useUploadImage();

  const [errors, setErrors] = useState<{
    name?: string;
    surname?: string;
    email?: string;
    phone_number?: string;
    password?: string;
    image?: string;
  }>({});

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setErrors((prev) => ({ ...prev, image: undefined }));
    uploadImage(
      {
        file,
      },
      {
        onSuccess: (data) => {
          setImageId(data.id);
        },
        onError: () => {
          setErrors((prev) => ({ ...prev, image: "Image upload failed" }));
        },
      },
    );
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name) newErrors.name = "Name is required";
    if (!surname) newErrors.surname = "Surname is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone_number) newErrors.phone_number = "Phone_number is required";
    if (!password) newErrors.password = "Password is required";
    // if (!image) newErrors.image = "Profile photo is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const registerData: any = {
      name,
      surname,
      email,
      password,
      phone_number,
    };
    if (image_id) registerData.image = image_id;

    register(registerData, {
      onSuccess: () => router.push("/"),
      onError: (e: any) =>
        toast.error(e.response?.data?.message || "Registration failed"),
    });
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Ro'yhatdan o'tish</Title>

        <Form onSubmit={handleRegister}>
          <AvatarWrapper $hasError={!!errors.image}>
            {preview ? (
              <AvatarImage src={preview} />
            ) : (
              <span
                style={{
                  color: "#64748b",
                  marginLeft: "8px",
                }}
              >
                Profile rasmini yuklang
              </span>
            )}
            <HiddenInput type="file" accept="image/*" onChange={handleImage} />
          </AvatarWrapper>
          {errors.image && <ErrorText>{errors.image}</ErrorText>}

          <FlexWrapper>
            <div>
              <Input
                value={name}
                hasError={!!errors.name}
                placeholder="Ism"
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: undefined }));
                }}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>

            <div>
              <Input
                value={surname}
                hasError={!!errors.surname}
                placeholder="Familiya"
                onChange={(e) => {
                  setSurname(e.target.value);
                  setErrors((prev) => ({ ...prev, surname: undefined }));
                }}
              />
              {errors.surname && <ErrorText>{errors.surname}</ErrorText>}
            </div>
          </FlexWrapper>

          <FlexWrapper>
            <div>
              <Input
                value={email}
                type="email"
                hasError={!!errors.email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>

            <div>
              <Input
                value={password}
                type="password"
                hasError={!!errors.password}
                placeholder="Parol"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: undefined }));
                }}
              />
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </div>
          </FlexWrapper>
          <FlexWrapper>
            <div>
              <Input
                value={phone_number}
                type="text"
                hasError={!!errors.phone_number}
                placeholder="Telefon raqam"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setErrors((prev) => ({ ...prev, phone_number: undefined }));
                }}
              />
              {errors.phone_number && (
                <ErrorText>{errors.phone_number}</ErrorText>
              )}
            </div>
          </FlexWrapper>

          <Button type="submit" disabled={isPending}>
            {isPending ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
          </Button>
        </Form>

        <LinkText>
          Avval ro'yxatdan o'tganmisiz?
          <span onClick={() => router.push("/")}>Kirish</span>
        </LinkText>
      </Card>
    </PageWrapper>
  );
}
