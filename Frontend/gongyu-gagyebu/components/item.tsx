import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  date: string;
}

export default function Item({ title, price, date, id }: ItemProps) {
  return (
    <Link href={`/items/${id}`}>
      <a className="flex px-4 py-3 cursor-pointer justify-between">
        
        <div className="flex space-x-4">
          <span className="font-medium text-gray-900">{date}</span>
          <span className="font-medium text-gray-900">{title}</span>
        </div>

        <div className="flex space-x-2 justify-end">

          <span className="px-4 font-medium text-gray-900">{price}원</span>
          
          <div className="flex space-x-1 items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
}
