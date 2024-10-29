import type { IconProps } from "src/components/icons/types";

export function SolidityLogoIcon({ title, ...props }: IconProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>{title}</title>
      <g opacity="0.45">
        <path d="M84.4829 0L63.8857 36.5754H22.72L43.303 0H84.4829Z" />
        <path d="M43.5025 128L64.0998 91.4241H105.28L84.6826 128H43.5025Z" />
      </g>
      <g opacity="0.6">
        <path d="M63.8857 36.5754H105.066L84.4829 0H43.3029L63.8857 36.5754Z" />
        <path d="M64.0995 91.4243H22.9194L43.5023 128H84.6824L64.0995 91.4243Z" />
      </g>
      <g opacity="0.8">
        <path d="M43.303 73.1367L63.8857 36.5755L43.303 0L22.72 36.5755L43.303 73.1367Z" />
        <path d="M84.6827 54.8631L64.0997 91.4244L84.6827 128L105.28 91.4244L84.6827 54.8631Z" />
      </g>
    </svg>
  );
}
