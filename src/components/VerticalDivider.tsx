import classNames from "classnames";

export function VerticalDivider({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "w-px h-auto bg-gradient-to-b from-content/0 via-aquamarine/75 to-content/0",
        className,
      )}
    />
  );
}
