import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrap = styled.div`
  animation: ${fadeIn} 0.25s ease;
  width: 100%;
  padding: 0 10px;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 15px;
  transition: color 0.15s;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  p {
    font-size: 16px;
  }
`;

export const DocBanner = styled.div`
  background: #1a2236;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
`;

export const Avatar = styled.div<{ $color?: string }>`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  background: ${({ $color }) => $color || "#1e3a6e"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #85b7eb;
  flex-shrink: 0;
`;

export const DocMeta = styled.div``;
export const DocName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
export const DocSpec = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2563eb;
`;
export const DocInfoRow = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 4px;
`;
export const DocInfoItem = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ProgressBar = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 24px;
`;
export const ProgressDot = styled.div<{ $active: boolean }>`
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background: ${({ $active }) =>
    $active ? "#2563eb" : "rgba(255,255,255,0.08)"};
  transition: background 0.3s;
`;

export const SectionLabel = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #e2e8f0;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  div {
    width: 100%;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 14px;
`;
export const FieldLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #e2e8f0;
  margin-bottom: 5px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  background: #0f1623;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;
  padding: 8px 16px;
  height: 100px;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: border-color 0.15s;
  &:focus {
    border-color: #2563eb;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  resize: none;
`;

export const DaysRow = styled.div`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding-bottom: 4px;
  margin-bottom: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const DayCard = styled.div<{ $sel: boolean }>`
  min-width: 50px;
  background: ${({ $sel }) => ($sel ? "rgba(37,99,235,0.15)" : "#0f1623")};
  border: 0.5px solid
    ${({ $sel }) => ($sel ? "#2563eb" : "rgba(255,255,255,0.08)")};
  border-radius: 9px;
  padding: 8px 0;
  text-align: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s;
`;
export const DayName = styled.div<{ $sel: boolean }>`
  font-size: 10px;
  color: ${({ $sel }) => ($sel ? "#85b7eb" : "rgba(255,255,255,0.3)")};
`;
export const DayNum = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin-top: 2px;
`;

export const SlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  margin-bottom: 20px;
  /* height: 30px; */
`;
export const Slot = styled.div<{ $sel: boolean; $taken: boolean }>`
  background: ${({ $sel }) => ($sel ? "rgba(37,99,235,0.15)" : "#0f1623")};
  border: 1px solid
    ${({ $sel }) => ($sel ? "#2563eb" : "rgba(255,255,255,0.07)")};
  border-radius: 8px;
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  color: ${({ $sel }) => ($sel ? "#e2e8f0" : "rgba(255,255,255,0.45)")};
  cursor: ${({ $taken }) => ($taken ? "not-allowed" : "pointer")};
  opacity: ${({ $taken }) => ($taken ? 0.25 : 1)};
  text-decoration: ${({ $taken }) => ($taken ? "line-through" : "none")};
  transition: all 0.15s;
  &:hover {
    border-color: ${({ $taken }) =>
      $taken ? "rgba(255,255,255,0.07)" : "rgba(37,99,235,0.5)"};
    color: ${({ $taken }) => ($taken ? "rgba(255,255,255,0.45)" : "#fff")};
  }
`;

export const ConfirmBox = styled.div`
  background: #0f1623;
  border: 0.5px solid rgba(255, 255, 255, 0.07);
  border-radius: 11px;
  padding: 14px 16px;
  margin-bottom: 18px;
`;
export const ConfirmRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.05);
  &:last-child {
    border-bottom: none;
  }
`;
export const ConfirmKey = styled.span`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
`;
export const ConfirmVal = styled.span<{ $accent?: boolean }>`
  font-size: 16px;
  color: ${({ $accent }) => ($accent ? "#2563eb" : "#fff")};
  font-weight: 500;
`;

export const PrimaryBtn = styled.button`
  height: 42px;
  background: #2563eb;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  gap: 10px;
  &:hover {
    opacity: 0.87;
  }
  margin-left: auto;
  margin-top: 25px;
`;

export const SuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 16px;
  text-align: center;
  animation: ${fadeIn} 0.3s ease;
`;
export const OkCircle = styled.div`
  width: 58px;
  height: 58px;
  background: rgba(29, 158, 117, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
export const SuccessTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 6px;
`;
export const SuccessSub = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
`;
export const CodeBox = styled.div`
  background: #0f1623;
  border: 0.5px solid rgba(255, 255, 255, 0.07);
  border-radius: 11px;
  padding: 14px 28px;
  margin-bottom: 20px;
`;
export const CodeLabel = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 4px;
`;
export const CodeValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #2563eb;
  letter-spacing: 7px;
`;

export const DAYS = [
  ["Du", 24],
  ["Se", 25],
  ["Ch", 26],
  ["Pa", 27],
  ["Ju", 28],
  ["Sh", 29],
];
export const TIMES = [
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];
export const TAKEN_IDX = [1, 4, 9];

export interface Props {
  doctor: any;
  user: any;
  onBack: () => void;
}

export type Step = 1 | 2 | 3 | 4;
