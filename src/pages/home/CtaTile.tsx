import classNames from "classnames";
import { PropsWithChildren } from "react";

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
          "clip-corners bg-aquamarine/40 p-px flex-1",
          className,
        )}
      >
        <div className="clip-corners bg-neutral-950 p-5 h-full">
          <div className="clip-corners-inner bg-gradient-[123deg] from-content-600/10 to-content-600/[0.07] pt-8 pb-10 px-10 space-y-8 h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

CtaTile.IconList = function CtaTileIconList({
  children,
}: PropsWithChildren<{}>) {
  return <ul className="space-y-3">{children}</ul>;
};

export interface CtaTileIconListItemProps {
  src: string;
}

CtaTile.IconListItem = function CtaTileIconListItem({
  src,
  children,
}: PropsWithChildren<CtaTileIconListItemProps>) {
  return (
    <li className="card inline-flex items-start gap-3 spaced-mono leading-[18px] pl-5 pr-8 py-4">
      <img src={src} className="size-6 my-[-3px]" />
      {children}
    </li>
  );
};