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

      <div className="flex text-xl"> 이번달(3월) 예산을</div>

      <div className="flex mt-2">
        <input
          id="amount"
          value="32000"
          className="w-30 appearance-none p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        /> 원
      </div>

      <div className="flex text-xl"> 으로 변경할께요</div>




      <div
        className="w-full h-12 max-w-md bottom-10 fixed flex justify-center items-center"
      >
        <button className="w-full mx-3 py-3 flex text-xl items-center justify-center bg-yellow-400 border-solid border-2">
          변경하기
        </button>
      </div>
    </Layout>
  );
};

export default Budget;
