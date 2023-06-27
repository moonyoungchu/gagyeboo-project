import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link href="/items/add">
      <div className="w-full h-12 max-w-md bottom-10 fixed flex justify-center items-center">
        <a
          className="block w-full rounded-md py-3 mx-2 cursor-pointer
              text-center text-sm font-semibold text-white shadow-sm
              bg-yellow-400 hover:bg-yellow-300 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          + 지출 등록
        </a>
      </div>
    </Link>
  );
}
