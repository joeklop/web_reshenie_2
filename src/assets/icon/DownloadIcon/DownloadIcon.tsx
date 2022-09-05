import React from "react";

const DownloadIcon = () => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.0588 12.2941V15.1177C16.0588 16.1573 15.2161 17 14.1765 17H2.88235C1.84276 17 1 16.1573 1 15.1177V12.2941"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.76465 8.52942L8.52935 12.2941L12.2941 8.52942"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52942 12.2941V1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default React.memo(DownloadIcon);
