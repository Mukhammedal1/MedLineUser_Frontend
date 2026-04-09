import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  background: #020617;
  padding: 32px;
  border-radius: 12px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 12px;
  border-radius: 8px;
  background: #020617;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#1e293b")};
  color: #fff;
  font-size: 16px;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "red" : "#38bdf8")};
  }

  &::placeholder {
    color: #64748b;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #38bdf8;
  font-weight: 600;
  cursor: pointer;
`;

export const LinkText = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #94a3b8;

  span {
    margin-left: 6px;
    color: #38bdf8;
    cursor: pointer;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const AvatarWrapper = styled.label<{ $hasError?: boolean }>`
  width: 110px;
  height: 110px;
  margin: 0 auto 10px;
  border-radius: 50%;
  border: 2px dashed ${({ $hasError }) => ($hasError ? "red" : "#334155")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HiddenInput = styled.input`
  display: none;
`;
