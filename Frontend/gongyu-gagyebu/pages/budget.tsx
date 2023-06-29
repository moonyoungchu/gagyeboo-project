import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Tag from "../components/tag";

const Budget: NextPage = () => {
  return (
    <Layout canGoBack={true} title={`예산 수정`}>
      <Head>
        <title>{`예산 수정`}</title>
      </Head>

      <div className="px-5 pb-2 flex flex-col ">
        <div className="flex text-xl mb-4"> 6월 예산을</div>

        <div
          className="flex rounded-md mb-4
          ring-1 ring-inset ring-gray-300 
          focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-400"
        >
          <input
            type="text"
            name="budget"
            className="text-right block flex-1 border-0 bg-transparent py-3 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0"
            placeholder="이번달 예산을 입력하세요"
          />
          <span className="flex select-none items-center pr-3 text-gray-900">
            원
          </span>
        </div>

        <div className="flex text-xl justify-end"> 으로 변경할께요</div>
      </div>

      <div className="w-full h-12 max-w-md bottom-10 fixed flex justify-center items-center">
        <button
          type="submit"
          className="block w-full rounded-md py-3 mx-2
              text-center text-sm font-semibold text-white shadow-sm
              bg-yellow-400 hover:bg-yellow-300 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          예산 변경하기
        </button>
      </div>
    </Layout>
  );
};

export default Budget;
