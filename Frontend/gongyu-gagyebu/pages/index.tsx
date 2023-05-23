import type { NextPage } from "next";
import FloatingButton from "../components/floating-button";
import Item from "../components/item";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="공유가계부" hasTabBar>
      <div className="flex flex-col divide-y">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="신전떡볶이"
            price={5000}
            date={"03/05"}
            hearts={1}
          />
        ))}

        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
