import classNames from "classnames";

interface PrevButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function PrevButton({ className, disabled, onClick }: PrevButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex h-12 w-12 items-center justify-center rounded-full border border-neutral-600 backdrop-blur-md transition-all hover:border-neutral-100",
        {
          "!border-neutral-600 opacity-50": disabled,
        },
        className,
      )}
    >
      <img src="/icons/left-arrow-icon.svg" />
    </button>
  );
}
