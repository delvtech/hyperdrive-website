import classNames from "classnames";
import type { PropsWithChildren } from "react";

export interface CtaTileProps {
  className?: string;
}

export function CtaTile({
  className,
  children,
}: PropsWithChildren<CtaTileProps>) {
  return (
    <>
      <div
        className={classNames(
          "clip-corners flex-1 bg-aquamarine/40 p-px",
          className,
        )}
      >
        <div className="clip-corners h-full bg-neutral-950 p-5">
          <div
            className={classNames(
              "clip-corners-inner relative flex h-full flex-col items-start gap-8 bg-gradient-[123deg] from-content-600/10 to-content-600/[0.07] px-10 pt-8 pb-10 [&>*]:relative",
              "max-lg:items-center max-lg:px-7 max-lg:pb-14",
            )}
          >
            {children}
            <div className="!absolute -z-10 -top-8 inset-0 bg-[url('/accents/tile-grid-bg.svg')]" />
          </div>
        </div>
      </div>
    </>
  );
}

CtaTile.IconList = function CtaTileIconList({
  children,
}: PropsWithChildren<{}>) {
  return (
    <ul
      className={classNames(
        "flex flex-col items-start gap-3",
        "max-lg:items-stretch",
      )}
    >
      {children}
    </ul>
  );
};

export interface CtaTileIconListItemProps {
  src: string;
}

CtaTile.IconListItem = function CtaTileIconListItem({
  src,
  children,
}: PropsWithChildren<CtaTileIconListItemProps>) {
  return (
    <li className="card spaced-mono inline-flex items-start gap-3 py-4 pr-8 pl-5 leading-[18px]">
      <img src={src} className="my-[-3px] size-6" />
      {children}
    </li>
  );
};
