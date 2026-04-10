import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  LinkText,
  PageWrapper,
  Title,
} from "./signIn.style";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSignIn } from "@/hooks/useAuth";
import Logo from "../../components/Logo/logo";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: signIn, isPending } = useSignIn();

const playSound = () => {
  const audio = new Audio("/sounds/3.mp3");
  audio.play();
};

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          playSound()
          router.push("/doctors");
          toast.success("Tizimga kirildi");
        },
        onError: (e: any) => {
          toast.error(e.response?.data?.message);
        },
      },
    );
  };

  return (
    <PageWrapper>
      <Card>
        <Logo/>
        <Title>Kirish</Title>

        <Form onSubmit={(e) => handleSignIn(e)}>
          <Input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            value={password}
            type="password"
            placeholder="Parol"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button type="submit">
            {isPending ? "Yuklanmoqda..." : "Kirish"}
          </Button>
        </Form>

        <LinkText>
          Akkaunt mavjud emasmi?
          <span onClick={() => router.push("/register")}>Ro'yxatdan o'tish</span>
        </LinkText>
      </Card>
    </PageWrapper>
  );
};

export default SignInPage;
