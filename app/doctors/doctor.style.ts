import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 98%;
  height: 110px;
  border: 2px solid #1e293b;
  background-color: #0f172a;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const InputWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #1e293b;
  padding: 5px 15px;
  gap: 10px;
  border-radius: 10px;
  input {
    color: #f1f5f9;
    outline: none;
    width: 96%;
    background: transparent;
    border: none;
  }
`;
export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CategoryWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  p {
    background-color: #e2e8f0;
    border-radius: 13px;
    padding: 3px 10px;
    cursor: pointer;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DoctorCardWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #0f172a;
  border-radius: 15px;
  margin: 0 auto;
  border: 1px solid #1e293b;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: #f1f5f9;
  }
`;
export const DoctorImageName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const NameSpec = styled.div`
  p {
    font-size: 20px;
    font-weight: 700;
    color: #f1f5f9;
  }
  span {
    font-size: 14px;
    color: #f1f5f9;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #94a3b8;
  }
`;
export const NoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #132045;
  p {
    color: #2563eb;
    font-weight: 800;
  }
`;
export const FirstWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
export const SpecStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 18px;
    color: #2563eb;
    font-weight: 700;
  }
`;
export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 10px;
  margin: 0 auto;
  background-color: #1e293b;
  padding: 5px 15px;
  border-radius: 15px;
`;
export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 8px;
    color: #f1f5f9;
  }
`;
export const SpanWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  p {
    color: #f1f5f9;
  }
`;
export const PriceButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: #1e293b;
  padding: 5px 10px;
  border-radius: 10px;
  p {
    color: #94a3b8;
  }
  span {
    color: #f1f5f9;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #2563eb;
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #60a5fa;
  }
`;
export const ScrollGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  gap: 15px;
  width: 98%;
  margin: 0 auto;
  overflow-y: auto;
  height: 410px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
// export const SearchWrapper = styled.div``;
// export const SearchWrapper = styled.div``;
// export const SearchWrapper = styled.div``;
