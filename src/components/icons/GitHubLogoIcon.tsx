import type { IconProps } from "src/components/icons/types";

export function GitHubLogoIcon({ title, ...props }: IconProps) {
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
      <path d="M4.43258 1.74949C5.09175 1.65533 6.01592 1.87033 7.21008 2.55449L7.43675 2.68866L7.57008 2.77199L7.90092 2.70283C9.16242 2.45907 10.4567 2.43651 11.7259 2.63616L12.1059 2.70283L12.4359 2.77199L12.5701 2.68866C13.7243 1.98866 14.6426 1.71366 15.3384 1.73199L15.4751 1.73866L15.5976 1.75283L15.6609 1.76449L15.7026 1.77366L15.8226 1.81283C16.0191 1.89404 16.1771 2.04727 16.2643 2.24116C16.6053 3.00091 16.7201 3.84283 16.5951 4.66616L16.5559 4.88866L16.5176 5.05199L16.6201 5.18783C17.0984 5.85033 17.3951 6.62783 17.4784 7.44366L17.4976 7.68949L17.5034 7.91616C17.5034 11.1287 16.1209 12.8187 13.6334 13.4828L13.4293 13.5337L13.3193 13.5578L13.3309 13.692L13.3376 13.8228L13.3409 14.127L13.3393 14.3045L13.3368 17.4995C13.3368 17.7036 13.2618 17.9006 13.1262 18.0532C12.9905 18.2057 12.8037 18.3031 12.6009 18.327L12.5034 18.3328H7.50342C7.29931 18.3328 7.1023 18.2578 6.94978 18.1223C6.79724 17.9866 6.6998 17.7997 6.67592 17.597L6.67008 17.4995V16.8878C5.15508 17.1045 4.14508 16.5345 3.24508 15.3228L2.79925 14.6845C2.56592 14.3545 2.42008 14.202 2.30842 14.1478L2.26842 14.132C2.06209 14.0649 1.89005 13.9201 1.78885 13.7282C1.68765 13.5363 1.66528 13.3125 1.72648 13.1043C1.78768 12.8963 1.92763 12.7202 2.1166 12.6136C2.30557 12.507 2.52864 12.4783 2.73842 12.5337C3.27342 12.6903 3.63342 13.007 4.04675 13.5662L4.49508 14.207C5.12842 15.1062 5.62842 15.4228 6.66925 15.1995L6.67008 14.6345L6.65508 14.4945C6.63048 14.2664 6.62463 14.0368 6.63758 13.8078L6.65175 13.6537L6.66758 13.5537L6.57758 13.5337C4.09758 12.942 2.65842 11.3895 2.51508 8.41784L2.50675 8.15949L2.50342 7.91616C2.50438 7.01331 2.76723 6.13012 3.26008 5.37366L3.38675 5.18866L3.48842 5.05283L3.45092 4.88949C3.30068 4.15746 3.34231 3.39902 3.57175 2.68783L3.65508 2.45283L3.74342 2.24199C3.83042 2.04826 3.98809 1.89505 4.18425 1.81366L4.30425 1.77449L4.43258 1.74949Z" />
    </svg>
  );
}
