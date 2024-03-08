import classNames from "classnames";
import circleCheckIcon from "src/assets/icons/circle-check-icon.svg";

interface HeroPillProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HeroPill({ className, children, ...restProps }: HeroPillProps) {
  return (
    <div
      {...restProps}
      className={classNames(
        "rounded-full flex items-center justify-center gap-2 bg-neutral-100/5 border border-neutral-100/5 h-14 px-8 backdrop-blur-sm font-mono text-neutral-100 uppercase",
        className,
      )}
    >
      <img src={circleCheckIcon} alt="" className="w-6 h-6" />
      {children}
    </div>
  );
}
