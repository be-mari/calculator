import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return <button className="btn">{children}</button>;
};
export default Button;
