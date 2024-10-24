import type { SVGProps } from "react";

export function DocIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.16699 8.66699C4.16699 8.39085 4.39085 8.16699 4.66699 8.16699H8.66699C8.94313 8.16699 9.16699 8.39085 9.16699 8.66699C9.16699 8.94313 8.94313 9.16699 8.66699 9.16699H4.66699C4.39085 9.16699 4.16699 8.94313 4.16699 8.66699Z" />
      <path d="M4.66699 10.833C4.39085 10.833 4.16699 11.0569 4.16699 11.333C4.16699 11.6091 4.39085 11.833 4.66699 11.833H7.33366C7.6098 11.833 7.83366 11.6091 7.83366 11.333C7.83366 11.0569 7.6098 10.833 7.33366 10.833H4.66699Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1658 6.64316C15.1599 6.51313 15.1043 6.39605 15.0175 6.31045L9.68882 0.981731C9.59817 0.889912 9.47223 0.833008 9.33301 0.833008H5.99967C4.28369 0.833008 2.95243 1.17314 2.06279 2.06279C1.17314 2.95243 0.833008 4.28369 0.833008 5.99967V9.99967C0.833008 11.7157 1.17314 13.0469 2.06279 13.9366C2.95243 14.8262 4.28369 15.1663 5.99967 15.1663H9.99967C11.7157 15.1663 13.0469 14.8262 13.9366 13.9366C14.8262 13.0469 15.1663 11.7157 15.1663 9.99967V6.66634C15.1663 6.65857 15.1662 6.65084 15.1658 6.64316ZM1.83301 5.99967C1.83301 4.38232 2.15954 3.38025 2.76989 2.76989C3.38025 2.15954 4.38232 1.83301 5.99967 1.83301H8.83301V3.99969C8.83301 5.02739 8.99784 5.87163 9.56279 6.43658C10.1277 7.00152 10.972 7.16636 11.9997 7.16636H14.1663V9.99967C14.1663 11.617 13.8398 12.6191 13.2295 13.2295C12.6191 13.8398 11.617 14.1663 9.99967 14.1663H5.99967C4.38232 14.1663 3.38025 13.8398 2.76989 13.2295C2.15954 12.6191 1.83301 11.617 1.83301 9.99967V5.99967ZM9.83301 3.99969V2.54013L13.4592 6.16636H11.9997C11.0274 6.16636 10.5383 5.99786 10.2699 5.72947C10.0015 5.46108 9.83301 4.97199 9.83301 3.99969Z"
      />
    </svg>
  );
}
