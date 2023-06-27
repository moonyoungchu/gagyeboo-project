import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import Tag from "../../components/tag";

const Input: NextPage = () => {
  return (
    <Layout canGoBack={true} title={"소비 내역 수정"}>
      <Head>
        <title>{`소비 내역 수정`}</title>
      </Head>

      <div className="flex text-xl"> 3월 <input value="17" id="addtag" className="w-10 appearance-none border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"></input>일 </div>

      <div className="flex mt-2">
        <input
          id="amount"
          value="32000"
          className="w-30 appearance-none p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="flex mt-4">
        {[1, 1, 1, 1].map((_, i) => (
          <Tag id={i} key={i} name={"식비"} />
        ))}
      </div>

      <div className="flex mt-5">
       <input id="addtag" className="appearance-none border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"></input>
       <button className="border border-gray-300 mx-2">태그 추가</button>
      </div>

      <div
        className="w-full h-12 max-w-md bottom-10 fixed flex justify-center items-center"
      >
        <button className="w-full mx-3 py-3 flex text-xl items-center justify-center bg-yellow-400 border-solid border-2">
          수정하기
        </button>
      </div>
    </Layout>
  );
};

export default Input;
