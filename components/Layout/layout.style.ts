import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 23%;
  height: 100vh;
  background-color: #1e293b;
  border-right: 2px solid #334155;
`;
export const LogoWrapper = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #334155;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    width: 100%;
    height: 55px;
    object-fit: contain;
  }
`;
export const SectionWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #334155;
  }
  &.active {
    background-color: #2563eb;
  }
`;
export const Button = styled.button`
  font-size: 22px;
  color: #e2e8f0;
  cursor: pointer;
  background: transparent;
  border: none;
`;
export const ProfileWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  background-color: #1e293b;
  padding: 0 15px;
  border-bottom: 2px solid #334155;

  p {
    font-size: 18px;
    color: #e2e8f0;
  }
`;

export const ContentWrapper = styled.div`
  width: 77%;
  background-color: #132038;
`;

export const UserIconWrapper = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
  p {
    font-size: 20px;
  }
`;
export const UserImageWrapper = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
