import type { IconProps } from "src/components/icons/types";

export function XLogoIcon({ title, ...props }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <path d="M15.2716 1.58643H18.0828L11.9411 8.606L19.1663 18.1581H13.509L9.07804 12.3648L4.00796 18.1581H1.19503L7.7642 10.6498L0.833008 1.58643H6.63393L10.6392 6.8817L15.2716 1.58643ZM14.2849 16.4754H15.8427L5.7875 3.1807H4.11589L14.2849 16.4754Z" />
    </svg>
  );
}
