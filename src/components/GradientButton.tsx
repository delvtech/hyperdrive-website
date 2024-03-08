import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

interface BaseProps {
  /**
   * @default neutral-500 (#565E6F)
   */
  borderFrom?: "#565E6F";
  /**
   * @defailt gray-800 (##1f2937)
   */
  borderTo?: "#1f2937";
  /** @default 1 */
  borderWidth?: number;
}

export type GradientBorderButtonProps = BaseProps &
  (
    | React.ComponentPropsWithoutRef<"button">
    | React.ComponentPropsWithoutRef<"a">
    | LinkProps
  );

export function GradientBorderButton({
  borderFrom = "#565E6F",
  borderTo = "#1f2937",
  borderWidth = 1,
  ...tagProps
}: PropsWithChildren<GradientBorderButtonProps>) {
  const style: React.CSSProperties = {
    border: `${borderWidth}px solid transparent`,
    position: "relative",
    borderLeftColor: borderFrom,
    borderRightColor: borderTo,
  };

  const children: React.ReactNode = (
    <>
      <span
        className="absolute w-full h-px box-content bg-gray-800"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {tagProps.children}
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

  if (isAnchorProps(tagProps)) {
    return (
      <a
        {...tagProps}
        className={classNames("button", tagProps.className)}
        style={style}
      >
        {children}
      </a>
    );
  }

  if (isLinkProps(tagProps)) {
    return (
      <Link
        {...tagProps}
        className={classNames("button", tagProps.className)}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...tagProps}
      className={classNames("button", tagProps.className)}
      style={style}
    >
      {children}
    </button>
  );
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
