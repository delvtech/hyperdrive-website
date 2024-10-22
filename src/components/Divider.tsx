import classNames from "classnames";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "h-px bg-gradient-to-r from-content/0 via-aquamarine/75 to-content/0",
        className,
      )}
    />
  );
}
