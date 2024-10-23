import type { ComponentProps, PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { OneOf } from "src/components/types";

export type LinkishProps = (ComponentProps<"a"> | LinkProps) &
  OneOf<{
    href: string;
    to: string;
  }>;

export type ClickableProps = ComponentProps<"button"> | LinkishProps;

/**
 * A component that renders an anchor, Link, or button based on the given props.
 */
export function Clickable({
  children,
  className,
  ...props
}: PropsWithChildren<ClickableProps>) {
  const Tag = isAnchorProps(props) ? "a" : isLinkProps(props) ? Link : "button";

  return (
    <Tag {...(props as any)} className={className}>
      {children}
    </Tag>
  );
}

function isAnchorProps(
  props: ClickableProps,
): props is ComponentProps<"a"> & { href: string } {
  return "href" in props && props.href !== undefined;
}

function isLinkProps(
  props: ClickableProps,
): props is LinkProps & { to: string } {
  return "to" in props && props.to !== undefined;
}
