import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationProps {
  canGoBack?: boolean;
  showMenubar?: boolean;
}

export default function Navigation({
  canGoBack,
  showMenubar,
}: NavigationProps) {
    
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  console.log(">>>canGoBack",canGoBack)
  console.log(">>>showMenubar",showMenubar)

  return (
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
  );
}
