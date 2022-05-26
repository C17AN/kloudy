import type { NextPage } from "next";
import Title from "components/common/Title";
import Image from "next/image";

const RootPage: NextPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col justify-center items-center">
        <Image
          src="/images/hero-image.svg"
          width="360"
          height="360"
        />
        <h1 className="text-gray-700 text-xl font-extralight mb-8">
          누구나 조작하는 쿠버네티스, Kloudy
        </h1>
        <section className="flex gap-6">
          <button className="py-2 px-4 rounded-lg bg-sky-100 text-gray-500 shadow">
            클라우디 알아보기
          </button>
          <button className="py-2 px-4 rounded-lg bg-white text-gray-600 shadow">
            요금제 살펴보기
          </button>
        </section>
      </div>
    </div>
  );
};

export default RootPage;
