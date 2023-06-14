import type { NextPage } from "next";
import FloatingButton from "../components/floating-button";
import Item from "../components/item";
import Layout from "../components/layout";
import Head from "next/head";
import { MouseEvent, useState } from "react";
import { cls } from "../libs/utils";

const Home: NextPage = () => {
  const [sort, setSort] = useState("date");

  const onSortBtnClick = (value: string) => {
    setSort(value);
  };

  console.log(">>>sort", sort);
  return (
    <Layout showMenubar={true}>
      <Head>
        <title>{`공유가계부`}</title>
      </Head>

      {/* 이번달 지출 페이지 */}

      <div className="flex justify-center text-xl py-2">2023년 5월</div>

      <div>
        <div className="flex justify-end outline-yellow-300 outline px-2 py-1 m-2 rounded">
          예산 100,000원
        </div>
        <div className="flex justify-end outline-yellow-300 outline px-2 py-1 m-2 rounded">
          지출 100,000원
        </div>
        <div className="flex justify-end outline-yellow-300 outline px-2 py-1 m-2 rounded">
          남은 금액 100,000원
        </div>
      </div>

      <div className="flex justify-center outline-black outline m-2 h-10">
        가로 막대그래프(지출 30% / 잔여 70%)
      </div>

      <div className="flex justify-end pr-1">
        <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
          <button
            className={cls(
              "flex items-center rounded-md py-1 px-2 text-sm font-semibold",
              sort === "date" ? "bg-white shadow" : ""
            )}
            onClick={() => {
              onSortBtnClick("date");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                clipRule="evenodd"
              />
            </svg>

            <span
              className={cls(
                "mx-1",
                sort === "date" ? "text-slate-900" : "text-slate-600"
              )}
            >
              날짜별
            </span>
          </button>

          <button
            className={cls(
              "flex items-center rounded-md py-1 px-2 text-sm font-semibold",
              sort === "tag" ? "bg-white shadow" : ""
            )}
            onClick={() => {
              onSortBtnClick("tag");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>

            <span
              className={cls(
                "mx-1",
                sort === "tag" ? "text-slate-900" : "text-slate-600"
              )}
            >
              태그별
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {sort === "date" &&
          [1, 1, 1, 1, 1].map((_, i) => (
            <Item
              id={i}
              key={i}
              title="신전떡볶이"
              price={5000}
              date={"03/05"}
            />
          ))}

        {sort === "tag" &&
          [1, 1, 1, 1, 1].map((_, i) => (
            <Item id={i} key={i} title="쇼핑(20%)" price={220000} date={""} />
          ))}

        <FloatingButton />
      </div>
    </Layout>
  );
};

export default Home;
