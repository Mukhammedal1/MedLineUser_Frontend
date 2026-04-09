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
  max-width: 420px;
  background: #020617;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 24px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #020617;
  color: #fff;
  border: 1px solid #1e293b;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: #38bdf8;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #38bdf8;
  color: #020617;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #0ea5e9;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 16px;
  color: #94a3b8;

  span {
    margin-left: 6px;
    color: #38bdf8;
    cursor: pointer;
  }
`;
