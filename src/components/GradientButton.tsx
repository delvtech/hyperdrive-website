import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

interface BaseProps {
  /**
   * @default neutral-500 ("#565E6F")
   */
  borderFrom?: string;
  /**
   * @default aquamarine ("#15FFAB"")
   */
  hoverBorderFrom?: string;
  /**
   * @default gray-800 ("##1f2937")
   */
  borderTo?: string;
  /**
   * @default sky ("#14D3F9")
   */
  hoverBorderTo?: string;
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
  hoverBorderFrom = "#15FFAB",
  borderTo = "#1f2937",
  hoverBorderTo = "#14D3F9",
  borderWidth = 1,
  ...tagProps
}: PropsWithChildren<GradientBorderButtonProps>) {
  const style: React.CSSProperties = {
    ...tagProps.style,
    border: `${borderWidth}px solid transparent`,
    position: "relative",
  };

  const children: React.ReactNode = (
    <>
      {/* Left line */}
      <span
        className="absolute w-px h-full box-content opacity-100 group-hover:opacity-0 transition-all"
        style={{
          background: borderFrom,
          left: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Left line on hover */}
      <span
        className="absolute w-px h-full box-content opacity-0 group-hover:opacity-100 transition-all"
        style={{
          background: hoverBorderFrom,
          left: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Top line */}
      <span
        className="absolute w-full h-px box-content opacity-100 group-hover:opacity-0 transition-all"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {/* Top line on hover */}
      <span
        className="absolute w-full h-px box-content opacity-0 group-hover:opacity-100 transition-all"
        style={{
          background: `linear-gradient(to right, ${hoverBorderFrom}, ${hoverBorderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {tagProps.children}
      {/* Right line */}
      <span
        className="absolute w-px h-full box-content opacity-100 group-hover:opacity-0 transition-all"
        style={{
          background: borderTo,
          right: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Right line on hover */}
      <span
        className="absolute w-px h-full box-content opacity-0 group-hover:opacity-100 transition-all"
        style={{
          background: hoverBorderTo,
          right: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Bottom line */}
      <span
        className="absolute w-full h-px box-content opacity-100 group-hover:opacity-0 transition-all"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          bottom: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {/* Bottom line on hover */}
      <span
        className="absolute w-full h-px box-content opacity-0 group-hover:opacity-100 transition-all"
        style={{
          background: `linear-gradient(to right, ${hoverBorderFrom}, ${hoverBorderTo})`,
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
        className={classNames("button group", tagProps.className)}
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
        className={classNames("button group", tagProps.className)}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...tagProps}
      className={classNames("button group", tagProps.className)}
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
