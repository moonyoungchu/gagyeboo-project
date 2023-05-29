import type { NextPage } from "next";
import Item from "../components/item";
import Layout from "../components/layout";
import Head from "next/head";

const Year: NextPage = () => {
  return (
    <Layout showMenubar={true}>
      <Head>
        <title>{`연별 통계`}</title>
      </Head>

      {/* 연별 통계 페이지 */}
      <div className="flex flex-col">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item id={i} key={i} title="연별통계" price={5000} date={"03/05"} />
        ))}

      </div>

    </Layout>
  );
};

export default Year;
