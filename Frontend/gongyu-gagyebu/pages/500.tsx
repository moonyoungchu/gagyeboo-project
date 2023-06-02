import Head from "next/head";

export default function Custom500() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Head>
        <title>500 | 공유가계부</title>
        <meta charSet="utf-8" />
      </Head>

      <h1 className="text-2xl font-light text-white">
        500 <span className="mx-3 text-4xl">|</span>서버 지뢰 꽝~!!!
      </h1>
    </div>
  );
}
