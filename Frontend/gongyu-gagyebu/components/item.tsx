import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  yyyymm: string;
  day: string;
  sort: string;
  tagName: string;
}

export default function Item({
  title,
  tagName,
  price,
  yyyymm,
  day,
  id,
  sort,
}: ItemProps) {


  
  return (
    <Link href={`/items/${id}`}>
      <a className="flex w-full px-4 py-3 cursor-pointer justify-between">
        <div className="flex w-2/3">
          <div className="flex w-full justfy-start">
            <span className="flex w-1/3 font-medium text-gray-900">{`${yyyymm}${day}`}</span>
            <span className="flex w-1/3 font-medium text-blue-600">
              {tagName}
            </span>
            <span className="flex w-1/3 font-medium text-gray-900">
              {title}
            </span>
          </div>
        </div>

        <div className="flex w-1/3 space-x-3 justify-end">
          <div className="flex items-center font-medium text-gray-900">
            {price}원
          </div>
          <button
            className="flex space-x-1 items-center text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              console.log(">>>delete");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </a>
    </Link>
  );
}
