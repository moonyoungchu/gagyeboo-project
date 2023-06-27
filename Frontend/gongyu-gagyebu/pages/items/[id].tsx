import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import Tag from "../../components/tag";

const EditPage: NextPage = () => {
  return (
    <Layout canGoBack={true} title={"소비 내역"}>
      <Head>
        <title>{`소비 내역`}</title>
      </Head>

      <div className="px-2 pb-2">
        <form className="">
          <div className=" grid grid-cols-1 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-900"
              >
                날짜
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md bg-gray-50 pl-2
                ring-1 ring-inset ring-gray-300 
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-400"
                >
                  <input
                    type="text"
                    name="date"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    disabled={true}
                    value={"06월25일"}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-900"
              >
                금액
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md
                ring-1 ring-inset ring-gray-300 
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-400"
                >
                  <input
                    type="text"
                    name="amount"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    placeholder="지출금액을 입력하세요"
                  />
                  <span className="flex select-none items-center pr-3 text-gray-900">
                    원
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="memo"
                className="block text-sm font-medium text-gray-900"
              >
                메모
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md
                ring-1 ring-inset ring-gray-300 
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-400"
                >
                  <input
                    type="text"
                    name="memo"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    placeholder="메모를 입력하세요"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="tag-name"
                className="block text-sm font-medium text-gray-900"
              >
                태그
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md bg-gray-50
                ring-1 ring-inset ring-gray-300 py-1.5 pl-3 text-gray-900"
                >
                  {"식비"}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full h-12 max-w-md bottom-10 fixed flex justify-center items-center">
        <button
          type="submit"
          className="block w-full rounded-md py-3 mx-2
              text-center text-sm font-semibold text-white shadow-sm
              bg-yellow-400 hover:bg-yellow-300 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          수정하기
        </button>
      </div>
    </Layout>
  );
};

export default EditPage;
