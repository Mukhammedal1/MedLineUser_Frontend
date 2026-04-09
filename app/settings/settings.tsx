import React, { useState } from "react";
import {
  Container,
  SectionWrapper,
  SettingsIconWrapper,
  TextIconWrapper,
} from "./settings.style";
import { FaLock, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";

const SettingsPage = () => {
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(false);
  const [isSection, setIsSection] = useState(true);

  const handleClickSection = (section: string) => {
    router.push(`/settings/${section}`);
  };

  return (
    <SectionWrapper>
      <TextIconWrapper
        onClick={() => {
          handleClickSection("profile");
        }}
      >
        <SettingsIconWrapper>
          <FaUser size={50} color="#e2e8f0" />
        </SettingsIconWrapper>
        <p>Profil sozlamalari</p>
      </TextIconWrapper>
      <TextIconWrapper
        onClick={() => {
          handleClickSection("password");
        }}
      >
        <SettingsIconWrapper>
          <FaLock size={50} color="#e2e8f0" />
        </SettingsIconWrapper>
        <p>Parolni yangilash</p>
      </TextIconWrapper>
    </SectionWrapper>
  );
};

export default SettingsPage;
