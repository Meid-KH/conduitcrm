import React from "react";

interface IconList {
  [x: string]: () => any;
}

const Icons: IconList = {
  arrow: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  ),
  hamburger: () => (
    <svg viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="4" rx="2" fill="currentColor" />
      <rect y="13" width="20" height="4" rx="2" fill="currentColor" />
      <rect y="26" width="32" height="4" rx="2" fill="currentColor" />
    </svg>
  ),
  close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.355 35.355">
      <g data-name="Group 117" transform="translate(-313.679 -27.822)">
        <line
          x2="40"
          transform="translate(317.215 31.358) rotate(45)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <line
          x2="40"
          transform="translate(317.215 59.642) rotate(-45)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </g>
    </svg>
  ),
  check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  // plus: () => <i className="bg-red-400">plus</i>,
  default: () => (
    <i className="bg-red-400__ underline text-sm font-light">icon</i>
  ),
};

interface IconProps {
  name: string;
}
const Icon = ({ name }: IconProps) => {
  const IconElem = Icons[name] ? Icons[name] : Icons.default;
  return <IconElem />;
};

export default Icon;
