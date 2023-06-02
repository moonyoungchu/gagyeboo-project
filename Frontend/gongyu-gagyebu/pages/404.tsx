import Head from "next/head";

export default function Custom404() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Head>
        <title>404 | 공유가계부</title>
        <meta charSet="utf-8" />
      </Head>

      <h1 className="text-2xl font-light text-white">
        404 <span className="mx-3 text-4xl">|</span>낫 파운드 케잌🍰
      </h1>
    </div>
  );
}
