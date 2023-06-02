import React from "react";
import Link from "next/link";
import { cls } from "../libs/utils";
import { useRouter } from "next/router";
import Navigation from "./navigation";

interface LayoutProps {
  canGoBack?: boolean;
  showMenubar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  canGoBack,
  showMenubar,
  children,
}: LayoutProps) {
  const router = useRouter();

  return (
    <div>
      <Navigation canGoBack={canGoBack} showMenubar={showMenubar} />

      {router.pathname === "/" || router.pathname === "/year" ? (
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-blue-100 top-12 fixed w-full max-w-xl">
          <Link href="/">
            <a
              className={cls(
                "flex items-center justify-center gap-x-1.5 p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-300",
                router.pathname === "/" ? "bg-blue-400" : "bg-blue-100"
              )}
            >
              이번달 지출
            </a>
          </Link>

          <Link href="/year">
            <a
              className={cls(
                "flex items-center justify-center gap-x-1.5 p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-300",
                router.pathname === "/year" ? "bg-blue-400" : "bg-blue-100"
              )}
            >
              연간 소비 통계
            </a>
          </Link>
        </div>
      ) : null}

      <div className="pt-24 pb-5">{children}</div>
    </div>
  );
}
