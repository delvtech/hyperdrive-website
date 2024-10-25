import classNames from "classnames";

export function VerticalDivider({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "h-auto w-px bg-gradient-to-b from-content/0 via-aquamarine/75 to-content/0",
        className,
      )}
    />
  );
}
