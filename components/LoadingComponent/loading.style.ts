import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  p {
    color: #e2e8f0;
  }
  .loader {
    width: 60px;
    height: 60px;
    position: relative;
  }

  .loader::before,
  .loader::after {
    content: "";
    position: absolute;
    background: #1a7fc1;
    border-radius: 3px;
  }

  .loader::before {
    width: 100%;
    height: 30%;
    top: 35%;
    left: 0;
    animation: pulse-h 1.4s ease-in-out infinite;
  }

  .loader::after {
    width: 30%;
    height: 100%;
    top: 0;
    left: 35%;
    animation: pulse-v 1.4s ease-in-out infinite 0.2s;
  }

  @keyframes pulse-h {
    0%,
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
    50% {
      opacity: 0.4;
      transform: scaleX(0.8);
    }
  }

  @keyframes pulse-v {
    0%,
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.4;
      transform: scaleY(0.8);
    }
  }
`;
