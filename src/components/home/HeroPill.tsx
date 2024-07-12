import classNames from "classnames";
import circleCheckIcon from "src/assets/icons/circle-check-icon.svg";

interface HeroPillProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HeroPill({ className, children, ...restProps }: HeroPillProps) {
  return (
    <div
      {...restProps}
      className={classNames(
        "rounded-full flex items-center justify-center gap-2 bg-neutral-100/5 h-14 px-8 backdrop-blur-lg font-mono border border-neutral/20 text-neutral-100 uppercase shadow-[0_4px_24px_0_rgba(234,234,234,.15)]",
        className,
      )}
    >
      <img src={circleCheckIcon} alt="" className="w-6 h-6" />
      {children}
    </div>
  );
}
