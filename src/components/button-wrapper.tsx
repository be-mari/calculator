import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ButtonWrapper = ({ children }: Props) => {
  return <>{children}</>;
};

export default ButtonWrapper;
