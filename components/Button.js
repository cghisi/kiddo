import React from "react";

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "border-2 border-black py-4 px-5 hover:bg-black hover:text-white font-medium"
    : "border-2 border-black bg-black text-white py-4 px-5 hover:bg-white hover:text-black font-medium";
  return (
    <button
      type="button"
      className={[`btn--${size}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
