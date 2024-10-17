import React from "react";

interface ButtonProps {
  title?: string;
  Icon?: React.ComponentType;
  className?: string;
}

export default function SimpleBtn({ title, Icon, className }: ButtonProps) {
  return (
    <div>
      <button
        className={`hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
      >
        {title}
        {Icon && <Icon />}
      </button>
    </div>
  );
}
