import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  rate: number;
  month: string;
}

export default function YearItem({ title, price, month, id, rate }: ItemProps) {
  return (
    <Link href={`/yearitems/${id}`}>
      <a className="flex px-4 py-3 cursor-pointer justify-between">
        <div className="flex space-x-4">
          <span className="font-medium text-gray-900">{month}월</span>
        </div>

        <div className="flex space-x-2 justify-end">
          <span className="px-4 font-medium text-gray-900">{price}원</span>
          <span className="px-4 font-medium text-gray-900">{rate}%</span>
        </div>
      </a>
    </Link>
  );
}
