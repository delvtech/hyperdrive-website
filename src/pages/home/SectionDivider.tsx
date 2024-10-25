import classNames from "classnames";
import { Divider } from "src/components/Divider";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={classNames("inner-container", className)}>
      <Divider />
    </div>
  );
}
