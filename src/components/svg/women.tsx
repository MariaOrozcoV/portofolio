import type React from "react";

const women = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-woman"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M10 16v5m4-5v5m-6-5h8l-2-7h-4zm-3-5q2.5-2 5-2m9 2q-2.5-2-5-2m-4-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default women;
