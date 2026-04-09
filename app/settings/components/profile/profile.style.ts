import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0;
  .button-wrap {
    margin-left: auto;
    width: 37%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  padding: 15px 10px;
  background-color: #0f172a;
  border: 2px solid #1e293b;
  border-radius: 10px;
  .avatar {
    position: relative;
    width: 28%;
    margin-right: 25px;
    cursor: pointer;
  }

  .avatar img {
    width: 100%;
    height: 270px;
    border-radius: 50%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    opacity: 0;
    transition: 0.3s;
  }

  .avatar:hover .overlay {
    opacity: 1;
  }
`;
export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 95%;
  margin: 0 auto;
  p {
    color: #e2e8f0;
    font-size: 18px;
  }
  input {
    width: 90%;
    padding: 4px 12px;
    border-radius: 8px;
    background-color: #1e293b;
    color: darkgray;
    font-size: 17px;
    outline: none;
    border: 2px solid #1e293b;
    transition: border-color 0.15s;
    &:focus {
      border-color: #2563eb;
    }
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 57%;
  gap: 25px;
  border-radius: 10px;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 50%;
  background-color: #1e293b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  p {
    font-size: 50px;
    color: darkgray;
  }
`;

export const Button = styled.div`
  /* width: 15%; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 18px;
  gap: 10px;
  border-radius: 8px;
  margin-right: 25px;
  font-size: 18px;
  color: white;
  background-color: #2563eb;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background-color: #60a5fa;
  }
`;
export const EmailWrapper = styled.div`
  width: 95%;
  background-color: #0f172a;
  padding: 15px;
  background-color: #0f172a;
  border: 2px solid #1e293b;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;

`;
// export const FlexWrapper=styled.div``
// export const FlexWrapper=styled.div``
// export const FlexWrapper=styled.div``
// export const FlexWrapper=styled.div``
// export const FlexWrapper=styled.div``
// export const FlexWrapper=styled.div``
