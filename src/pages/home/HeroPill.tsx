import classNames from "classnames";
import circleCheckIcon from "src/assets/icons/circle-check-icon.svg";

interface HeroPillProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HeroPill({ className, children, ...restProps }: HeroPillProps) {
  return (
    <div
      {...restProps}
      className={classNames(
        "flex h-14 items-center justify-center gap-2 rounded-full border border-neutral/20 bg-neutral-100/5 px-8 font-mono text-neutral-100 uppercase shadow-[0_4px_24px_0_rgba(234,234,234,.15)] backdrop-blur-lg",
        className,
      )}
    >
      <img src={circleCheckIcon} alt="" className="h-6 w-6" />
      {children}
    </div>
  );
}
