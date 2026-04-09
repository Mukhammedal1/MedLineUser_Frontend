import styled from "styled-components";

export const Page = styled.div`
  padding: 15px;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #f1f5f9;
  margin-bottom: 2px;
`;

export const HeaderSub = styled.p`
  font-size: 13px;
  color: #94a3b8;
  margin-bottom: 1.25rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 15px;
`;

export const StatCard = styled.div`
  background: #1e293b;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const StatVal = styled.div<{ color?: string }>`
  font-size: 22px;
  font-weight: 500;
  color: ${({ color }) => color || "#f1f5f9"};
`;

export const StatLbl = styled.div`
  font-size: 12px;
  color: #94a3b8;
  /* margin-top: 2px; */
`;

export const Tabs = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`;

export const Tab = styled.div<{ $active?: boolean }>`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  border: 0.5px solid ${({ $active }) => ($active ? "#1e3a5f" : "#334155")};
  color: ${({ $active }) => ($active ? "#fff" : "#94a3b8")};
  background: ${({ $active }) => ($active ? "#1e3a5f" : "transparent")};
  transition: all 0.15s;
`;

export const TicketsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  height: 490px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const borderColors: Record<string, string> = {
  active: "#1D9E75",
  upcoming: "#378ADD",
  past: "#334155",
};

export const TicketCard = styled.div`
  background: #0f172a;
  border: 1px solid #1e293b;
  border-left: 3px solid #2563eb;
  border-radius: 0 12px 12px 0;
  padding: 10px;
`;

export const TicketMain = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
`;

export const TicketBody = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TicketTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const DocName = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #f1f5f9;
`;

export const DocSpec = styled.div`
  font-size: 15px;
  color: #2563eb;
`;

export const Badge = styled.div<{ $variant: true | false }>`
  font-size: 14px;
  padding: 3px 10px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 600;
    ${({ $variant }) =>
      $variant === true && `background: #0d2e22; color: #1D9E75;`}
    ${({ $variant }) =>
      $variant === false && `background: #1e293b; color: #94a3b8;`};
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #94a3b8;
`;

export const MetaDot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #334155;
`;

export const CodePill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #1e293b;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 12px;
  color: #94a3b8;
  margin-top: 6px;
`;

export const CodeVal = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #f1f5f9;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const Fee = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #f1f5f9;
  margin-top: 6px;

  span {
    font-size: 11px;
    color: #94a3b8;
    font-weight: 400;
  }
`;

export const Divider = styled.hr`
  border: 1px solid #1e293b;
  margin: 10px 0;
`;

export const TicketDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px 1.5rem;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailLbl = styled.div`
  font-size: 16px;
  color: #94a3b8;
`;

export const DetailVal = styled.div`
  font-size: 16px;
  color: #f1f5f9;
`;

export const ComplaintBox = styled.div`
  margin: 10px 0;
  background: #1e293b;
  border-radius: 8px;
  padding: 6px 12px;
`;

export const ComplaintLbl = styled.div`
  font-size: 16px;
  color: #94a3b8;
  margin-bottom: 3px;
`;

export const ComplaintTxt = styled.div`
  font-size: 16px;
  color: #f1f5f9;
  line-height: 1.5;
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

export const DeleteBtn = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  border-radius: 8px;
  color: white;
  background-color: #2563eb;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background-color: #60a5fa;
  }
`;

export const UserImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  }
`;
