import React from "react";

interface ButtonProps {
  title?: string;
  Icon?: React.ComponentType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SimpleBtn({ title, Icon, className, onClick }: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
      >
        {title}
        {Icon && <Icon />}
      </button>
    </div>
  );
}
