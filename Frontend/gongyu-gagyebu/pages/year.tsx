import type { NextPage } from "next";
import YearItem from "../components/year-item";
import Layout from "../components/layout";
import Head from "next/head";
import YearChart from "../components/year-chart";

const Year: NextPage = () => {
  return (
    <Layout showMenubar={true}>
      <Head>
        <title>{`연별 통계`}</title>
      </Head>

      {/* 연별 통계 페이지 */}
      <div className="flex justify-center"> - 2023년 - </div>

      <div className="flex justify-center m-2 h-48">
        <YearChart />
      </div>

      <div className="flex justify-center text-red-600 text-xl">
        {" "}
        1년동안 5천만원 썼어요🕺{" "}
      </div>

      <div className="flex flex-col">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <YearItem
            id={i}
            key={i}
            title="연별통계"
            price={5600000}
            month={`${i + 1}`}
            rate={35}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Year;
