import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Screen = ({ children }: Props) => {
  return <>{children}</>;
};

export default Screen;
