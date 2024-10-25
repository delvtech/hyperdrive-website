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
          // "clip-corners flex-1 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_0,_rgba(255,255,255,.50)_23%,_rgba(255,255,255,.15)_28%,_rgba(255,255,255,.20)_63%,_rgba(255,255,255,.50)_72%,_rgba(255,255,255,0)_100%)] bg-aquamarine/40 p-px",
          "clip-corners flex-1 bg-aquamarine/40 p-px",
          className,
        )}
      >
        <div
          className={classNames(
            "clip-corners h-full bg-neutral-950 p-5",
            "max-lg:p-3",
          )}
        >
          <div
            className={classNames(
              "clip-corners-inner relative flex h-full flex-col items-start gap-8 bg-gradient-[123deg] from-content-600/10 to-content-600/[0.07] px-10 pt-8 pb-10 [&>*]:relative",
              "max-lg:items-center max-lg:px-4 max-lg:pb-14",
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
    <li
      className={classNames(
        "card spaced-mono inline-flex items-start gap-3 py-4 pr-8 pl-5 leading-[18px]",
        "max-lg:gap-2 max-lg:pr-6 max-lg:pl-3",
      )}
    >
      <img src={src} className="my-[-3px] size-6" />
      {children}
    </li>
  );
};
