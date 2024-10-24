import classNames from "classnames";
import type { PropsWithChildren } from "react";
import { Clickable, type ClickableProps } from "src/components/Clickable";

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

export type GradientBorderButtonProps = BaseProps & ClickableProps;

export function GradientBorderButton({
  borderFrom = "rgb(255 255 255 / 60%)",
  hoverBorderFrom = "#2EFCB6",
  borderTo = "rgb(255 255 255 / 30%)",
  hoverBorderTo = "#44E8E8",
  borderWidth = 1,
  ...tagProps
}: PropsWithChildren<GradientBorderButtonProps>) {
  return (
    <Clickable
      {...tagProps}
      className={classNames("button group inline-flex", tagProps.className)}
      style={{
        ...tagProps.style,
        border: `${borderWidth}px solid transparent`,
        position: "relative",
      }}
    >
      {/* Left line */}
      <span
        className="absolute box-content h-full w-px opacity-100 transition-all duration-150 group-hover:opacity-0"
        style={{
          background: borderFrom,
          left: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Left line on hover */}
      <span
        className="absolute box-content h-full w-px opacity-0 transition-all duration-150 group-hover:opacity-100"
        style={{
          background: hoverBorderFrom,
          left: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Top line */}
      <span
        className="absolute box-content h-px w-full opacity-100 transition-all duration-150 group-hover:opacity-0"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {/* Top line on hover */}
      <span
        className="absolute box-content h-px w-full opacity-0 transition-all duration-150 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, ${hoverBorderFrom}, ${hoverBorderTo})`,
          top: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {tagProps.children}
      {/* Right line */}
      <span
        className="absolute box-content h-full w-px opacity-100 transition-all duration-150 group-hover:opacity-0"
        style={{
          background: borderTo,
          right: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Right line on hover */}
      <span
        className="absolute box-content h-full w-px opacity-0 transition-all duration-150 group-hover:opacity-100"
        style={{
          background: hoverBorderTo,
          right: -borderWidth,
          padding: `${borderWidth}px 0`,
        }}
      />
      {/* Bottom line */}
      <span
        className="absolute box-content h-px w-full opacity-100 transition-all duration-150 group-hover:opacity-0"
        style={{
          background: `linear-gradient(to right, ${borderFrom}, ${borderTo})`,
          bottom: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
      {/* Bottom line on hover */}
      <span
        className="absolute box-content h-px w-full opacity-0 transition-all duration-150 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, ${hoverBorderFrom}, ${hoverBorderTo})`,
          bottom: -borderWidth,
          padding: `0 ${borderWidth}px`,
        }}
      />
    </Clickable>
  );
}
