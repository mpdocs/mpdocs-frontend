import React from "react";

interface CustomLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: CustomLabelProps) => {
  return (
    <label className="flex flex-col gap-2" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
