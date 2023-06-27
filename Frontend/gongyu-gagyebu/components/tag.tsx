import Link from "next/link";

interface TagProps {
  name: string;
  id: number;
}

export default function Tag({ name, id }: TagProps) {
  return (
    <div className="flex px-3 py-1 mr-2 justify-between cursor-pointer ring-1 ring-inset ring-yellow-200 rounded-md">
      <div className="flex">
        <span className="font-medium text-blue-500">{name}</span>
      </div>

      <div className="flex justify-end">
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


    </div>
  );
}
