import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContentWrapper,
  LogoWrapper,
  ProfileWrapper,
  SectionWrapper,
  SideBar,
  UserIconWrapper,
  UserImageWrapper,
} from "./layout.style";
import { FaRobot, FaUser } from "react-icons/fa";
import { BsTicketPerforated } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { useRouter } from "next/router";
import { FiSettings } from "react-icons/fi";
import { useGetUserById } from "@/hooks/useUsers";
import LoadingComponent from "../LoadingComponent/loading";
import { getImageUrl } from "@/utils";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const active = router.pathname.replace("/", "");
  const [userId, setUserId] = useState<number>();
  const [name, setName] = useState<string>();
  const [image_url, setImageUrl] = useState<string>();

  useEffect(() => {
    const user_id = Number(localStorage.getItem("user_id"));
    setUserId(user_id);
  }, []);

  const { data: user, isLoading } = useGetUserById(Number(userId));

  useEffect(() => {
    if (user) {
      setName(user.name);
      setImageUrl(user.image?.url);
    }
  }, [user]);

  const handleClickSection = (section: string) => {
    router.push(`/${section}`);
  };

  // if (isLoading) {
  //   return <LoadingComponent />;
  // }

  return (
    <div className="container">
      <Container>
        <SideBar>
          <LogoWrapper>
            <img src="/k.png" alt="" />
          </LogoWrapper>
          <SectionWrapper
            className={active === "doctors" ? "active" : ""}
            onClick={() => handleClickSection("doctors")}
          >
            <FaUserDoctor color="#CBD5F5" size={40} />
            <Button>Shifokorlar</Button>
          </SectionWrapper>
          <SectionWrapper
            className={active === "tickets" ? "active" : ""}
            onClick={() => handleClickSection("tickets")}
          >
            <BsTicketPerforated color="#CBD5F5" size={40} />
            <Button>Chiptalarim</Button>
          </SectionWrapper>
          <SectionWrapper
            className={active === "ai" ? "active" : ""}
            onClick={() => handleClickSection("ai")}
          >
            <FaRobot color="#CBD5F5" size={40} />
            <Button>AI Maslahatchi</Button>
          </SectionWrapper>
          <SectionWrapper
            className={active === "settings" ? "active" : ""}
            onClick={() => handleClickSection("settings")}
          >
            <FiSettings color="#CBD5F5" size={40} />
            <Button>Sozlamalar</Button>
          </SectionWrapper>
        </SideBar>
        <ContentWrapper>
          <ProfileWrapper>
            <p>{name || ""}</p>
            {image_url ? (
              <UserImageWrapper
                onClick={() => {
                  router.push("/settings");
                }}
              >
                <img src={getImageUrl(image_url)} alt="" />
              </UserImageWrapper>
            ) : (
              <UserIconWrapper
                onClick={() => {
                  router.push("/settings");
                }}
              >
                <p>{name?.[0]?.toUpperCase()}</p>
              </UserIconWrapper>
            )}
          </ProfileWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </div>
  );
};

export default LayoutPage;
