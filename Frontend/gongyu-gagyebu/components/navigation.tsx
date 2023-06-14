import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationProps {
  canGoBack?: boolean;
  showMenubar?: boolean;
  title?: string;
}

export default function Navigation({
  canGoBack,
  showMenubar,
  title
}: NavigationProps) {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  console.log(">>>canGoBack", canGoBack, ">>>showMenubar", showMenubar);

  return (
    <div
      className="bg-white w-full h-12 max-w-xl text-lg font-medium text-gray-800 top-0 fixed flex justify-center items-center"
    >
      {title}

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
        <div className="flex justify-between w-full max-w-xl px-3">
          <button>
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

          <Link href="/budget">
            <a className="outline-yellow-400 outline">예산수정</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
