import classNames from "classnames";
import rightArrowIcon from "src/assets/icons/right-arrow-icon.svg";

interface NextButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function NextButton({ className, disabled, onClick }: NextButtonProps) {
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
      <img src={rightArrowIcon} />
    </button>
  );
}
