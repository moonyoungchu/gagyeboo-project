import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link href="/items/upload">
      <a
        className="fixed hover:bg-blue-500 border-0 aspect-square border-transparent 
      transition-colors cursor-pointer  bottom-10 right-5 
      shadow-xl bg-blue-400 rounded-full w-14 flex items-center 
      justify-center text-white "
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </a>
    </Link>
  );
}
