export interface TestDataItem {
  yyyymm: string;
  day: string;
  tagName: string;
  title: string;
  price: number;
}

export const testData: TestDataItem[] = [
  {
    yyyymm: "202306",
    day: "23",
    tagName: "구매",
    title: "나이키신발",
    price: 200000,
  },
  {
    yyyymm: "202306",
    day: "25",
    tagName: "식비",
    title: "샐러드",
    price: 8900,
  },
  {
    yyyymm: "202306",
    day: "20",
    tagName: "식비",
    title: "신전떡볶이",
    price: 5000,
  },
  {
    yyyymm: "202306",
    day: "20",
    tagName: "식비",
    title: "콜라",
    price: 2000,
  },
  {
    yyyymm: "202306",
    day: "21",
    tagName: "핸드폰비",
    title: "핸드폰요금",
    price: 69000,
  },

];
