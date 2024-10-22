import classNames from "classnames";

interface PrevButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function PrevButton({ className, disabled, onClick }: PrevButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "w-12 h-12 rounded-full backdrop-blur-md border border-neutral-600 hover:border-neutral-100 flex items-center justify-center transition-all",
        {
          "opacity-50 !border-neutral-600": disabled,
        },
        className,
      )}
    >
      <img src="/icons/left-arrow-icon.svg" />
    </button>
  );
}
