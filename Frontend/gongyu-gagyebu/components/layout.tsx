import React from "react";
import Link from "next/link";
import { cls } from "../libs/utils";
import { useRouter } from "next/router";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  showMenubar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  canGoBack,
  showMenubar = true,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <div>
      <div
        className="bg-white w-full h-12 max-w-xl justify-center text-lg px-10 
      font-medium  fixed text-gray-800 border-b top-0 flex items-center"
      >
        {canGoBack ? (
          <button onClick={onClick} className="absolute left-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}

        {showMenubar ? (
          <button onClick={onClick} className="absolute left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        ) : null}
      </div>

      {hasTabBar ? (
        <nav className="bg-white max-w-xl flex justify-between text-gray-700 border-b fixed w-full px-10 py-3 top-12">
          <Link href="/month">
            <a className="flex flex-col items-center space-y-2 text-blue-400 hover:text-blue-500">
              <span>이번달 소비</span>
            </a>
          </Link>
          <Link href="/year">
            <a className="flex flex-col items-center space-y-2 text-blue-400 hover:text-blue-500">
              <span>연별통계</span>
            </a>
          </Link>
        </nav>
      ) : null}

      <div className={cls("pt-24", hasTabBar ? "pb-12" : "")}>{children}</div>
    </div>
  );
}
