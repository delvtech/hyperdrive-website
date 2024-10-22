import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

interface BaseProps {
  /**
   * @default content/60 ("rgb(255 255 255 / 60%)")
   */
  borderFrom?: string;
  /**
   * @default aquamarine ("#2EFCB6")
   */
  hoverBorderFrom?: string;
  /**
   * @default content/30 ("rgb(255 255 255 / 30%)")
   */
  borderTo?: string;
  /**
   * @default teal ("#44E8E8")
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
  borderFrom = "rgb(255 255 255 / 60%)",
  hoverBorderFrom = "#2EFCB6",
  borderTo = "rgb(255 255 255 / 30%)",
  hoverBorderTo = "#44E8E8",
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
        className="absolute w-px h-full box-content opacity-100 group-hover:opacity-0 transition-all duration-150"
        style={{
          background: borderFrom,
          left: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Left line on hover */}
      <span
        className="absolute w-px h-full box-content opacity-0 group-hover:opacity-100 transition-all duration-150"
        style={{
          background: hoverBorderFrom,
          left: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Top line */}
      <span
        className="absolute w-full h-px box-content opacity-100 group-hover:opacity-0 transition-all duration-150"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {/* Top line on hover */}
      <span
        className="absolute w-full h-px box-content opacity-0 group-hover:opacity-100 transition-all duration-150"
        style={{
          background: `linear-gradient(to right, ${hoverBorderFrom}, ${hoverBorderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {tagProps.children}
      {/* Right line */}
      <span
        className="absolute w-px h-full box-content opacity-100 group-hover:opacity-0 transition-all duration-150"
        style={{
          background: borderTo,
          right: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Right line on hover */}
      <span
        className="absolute w-px h-full box-content opacity-0 group-hover:opacity-100 transition-all duration-150"
        style={{
          background: hoverBorderTo,
          right: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Bottom line */}
      <span
        className="absolute w-full h-px box-content opacity-100 group-hover:opacity-0 transition-all duration-150"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          bottom: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {/* Bottom line on hover */}
      <span
        className="absolute w-full h-px box-content opacity-0 group-hover:opacity-100 transition-all duration-150"
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
        className={classNames("button group inline-flex", tagProps.className)}
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
        className={classNames("button group inline-flex", tagProps.className)}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...tagProps}
      className={classNames("button group inline-flex", tagProps.className)}
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
