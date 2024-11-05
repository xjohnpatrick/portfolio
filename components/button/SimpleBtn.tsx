import React from "react";

interface ButtonProps {
  title?: string;
  Icon?: React.ComponentType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

export default function SimpleBtn({ title, Icon, className, onClick, isActive }: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`lg:hover:-translate-y-1 lg:transform lg:transition lg:duration-200 lg:hover:shadow-md ${
          isActive ? "text-blue" : "text-white"
        } ${className}`}
      >
        {title}
        {Icon && <Icon />}
      </button>
    </div>
  );
}
