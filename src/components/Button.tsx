import { ReactNode, memo } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className: string;
}

const Button = memo(({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
});

export default Button;
