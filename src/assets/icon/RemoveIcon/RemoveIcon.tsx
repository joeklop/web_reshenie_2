import React from "react";

const RemoveIcon = () => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9012 1.39526L1.42859 11.8678"
        stroke="#AAAAAA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.42859 1.39526L11.9012 11.8678"
        stroke="#AAAAAA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default React.memo(RemoveIcon);
