import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

export type GradientBorderButtonProps = BaseProps &
  (
    | React.ComponentPropsWithoutRef<"button">
    | React.ComponentPropsWithoutRef<"a">
    | LinkProps
  );

export function GradientBorderButton(
  props: PropsWithChildren<GradientBorderButtonProps>,
) {
  const { borderFrom, borderTo, borderWidth = 1, ...restProps } = props;

  const style: React.CSSProperties = {
    border: `${borderWidth}px solid transparent`,
    position: "relative",
    borderLeftColor: borderFrom,
    borderRightColor: borderTo,
  };

  const children: React.ReactNode = (
    <>
      <span
        className="absolute w-full h-px box-content"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {props.children}
      <span
        className="absolute w-full h-px box-content"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          bottom: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
    </>
  );

  if (isAnchorProps(restProps)) {
    return (
      <a {...restProps} style={style}>
        {children}
      </a>
    );
  }

  if (isLinkProps(restProps)) {
    return (
      <Link {...restProps} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button {...restProps} style={style}>
      {children}
    </button>
  );
}

interface BaseProps {
  borderFrom: string;
  borderTo: string;
  /** @default 1 */
  borderWidth?: number;
}

function isAnchorProps(
  props: Omit<GradientBorderButtonProps, keyof BaseProps>,
): props is React.ComponentPropsWithoutRef<"a"> {
  return "href" in props;
}

function isLinkProps(
  props: Omit<GradientBorderButtonProps, keyof BaseProps>,
): props is LinkProps {
  return "to" in props;
}
