import { NotFoundWrapper } from "./notfound.style";

interface NotFoundProps {
  icon: React.ReactNode;
  text: string;
}

const NotFound = ({ icon, text }: NotFoundProps) => {
  return (
    <NotFoundWrapper>
      {icon}
      <p>{text} mavjud emas</p>
    </NotFoundWrapper>
  );
};

export default NotFound;
